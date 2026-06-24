import {
  Anchor,
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  PasswordInput,
  Radio,
  TextInput,
} from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { signupValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
const form = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  accountType: "APPLICANT",
};

const SignUp = () => {
  const [data, setData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (event: any) => {
    if (typeof event == "string") {
      setData({ ...data, accountType: event });
      return;
    }
    let name = event.target.name,
      value = event.target.value;

    setData({ ...data, [name]: value });
    setFormError({ ...formError, [name]: signupValidation(name, value) });
    if (name === "password" && data.confirmPassword !== "") {
      let err = "";
      if (data.confirmPassword !== value) err = "passwords doesn't match";
      setFormError({
        ...formError,
        [name]: signupValidation(name, value),
        confirmPassword: err,
      });
    }
    if (name === "confirmPassword") {
      if (data.password !== value)
        setFormError({ ...formError, [name]: "passwords doesn't match" });
      else setFormError({ ...formError, confirmPassword: "" });
    }
  };

  const handleSubmit = () => {
    let valid = true,
      newFormError: { [key: string]: string } = {};
    for (let key in data) {
      if (key === "accountType") continue;
      if (key !== "confirmPassword")
        newFormError[key] = signupValidation(key, data[key]);
      else if (data[key] !== data["password"])
        newFormError[key] = "passwords doesn't match.";
      if (newFormError[key]) valid = false;
    }
    setFormError(newFormError);
    if (valid === true) {
      setLoading(true);
      registerUser(data)
        .then((res) => {
          console.log(res);
          setData(form);
          notifications.show({
            title: "Registered Successfully",
            message: "Redirecting to login page...",
            withCloseButton: true,
            icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500",
          });

          setTimeout(() => {
            setLoading(false);
            navigate("/login");
          }, 4000);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          notifications.show({
            title: "Registration failed",
            message: err.response.data.errorMessage,
            withCloseButton: true,
            icon: <IconX style={{ width: "90%", height: "90%" }} />,
            color: "red",
            withBorder: true,
            className: "!border-red-500",
          });
        });
    }
  };

  return (
   <> <LoadingOverlay
           visible={loading}
           zIndex={1000}
           className="translate-x-1/2"
           overlayProps={{ radius: "sm", blur: 2 }}
           loaderProps={{ color: "brightSun.4", type: "bars" }}
         /> <div className="w-1/2 px-20 sm-mx:p-15 bs-mx:p-10 md-mx:px-5 sm-mx:w-full flex flex-col justify-center gap-3">
      <div className="text-3xl font-semibold">Create Account</div>
      <TextInput
        name="name"
        error={formError.name}
        onChange={handleChange}
        value={data.name}
        withAsterisk
        label="Full Name"
        placeholder="Your name"
      />

      <TextInput
        name="email"
        error={formError.email}
        onChange={handleChange}
        value={data.email}
        withAsterisk
        leftSection={<IconAt size={16} />}
        label="Email"
        placeholder="Your email"
      />
      <PasswordInput
        name="password"
        error={formError.password}
        onChange={handleChange}
        value={data.password}
        withAsterisk
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Password"
        placeholder="Create you password"
      />
      <PasswordInput
        name="confirmPassword"
        error={formError.confirmPassword}
        onChange={handleChange}
        value={data.confirmPassword}
        withAsterisk
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Confirm Password"
        placeholder="Confirm password"
      />
      <Radio.Group
        onChange={handleChange}
        value={data.accountType}
        label="You are ?"
        withAsterisk
      >
        <Group mt="xs" grow>
          <Radio
            className="py-4 px-6 sm-mx:px-4 sm-mx:py-2 border has-[:checked]:bg-bright-sun-400/5 hover:bg-mine-shaft-800 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
            autoContrast
            value="APPLICANT"
            label="Applicant"
          />
          <Radio
            className="py-4 px-6 sm-mx:px-4 sm-mx:py-2 border has-[:checked]:bg-bright-sun-400/5 hover:bg-mine-shaft-800 has-[:checked]:border-bright-sun-400 border-mine-shaft-800 rounded-lg"
            autoContrast
            value="EMPLOYER"
            label="Employer"
          />
        </Group>
      </Radio.Group>
      <Checkbox
        autoContrast
        label={
          <>
            I accept <Anchor>terms & conditions</Anchor>
          </>
        }
      />
      <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">
        Sign Up
      </Button>
      <div className="mx-auto">
        Have an account ?{" "}
        <span
          className="text-bright-sun-400 hover:underline cursor-pointer"
          onClick={() => {
            navigate("/login");
            setFormError(form);
            setData(form);
          }}
        >
          Login
        </span>
      </div>
    </div></>
  );
};

export default SignUp;
