import {
  Button,
  LoadingOverlay,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { useDisclosure } from "@mantine/hooks";
import ResetPassword from "./ResetPassword";
import { useDispatch } from "react-redux";
import { setUser } from "../../Slices/UserSlice";
import { loginUser } from "../../Services/AuthService";
import { setJwt } from "../../Slices/JwtSlice";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const form = {
    email: "",
    password: "",
  };
  const [data, setData] = useState<{ [key: string]: string }>(form);
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const handleChange = (event: any) => {
    setFormError({ ...formError, [event.target.name]: "" });
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    let valid = true,
      newFormError: { [key: string]: string } = {};
    for (let key in data) {
      newFormError[key] = loginValidation(key, data[key]);
      if (newFormError[key]) valid = false;
    }
    setFormError(newFormError);
    if (valid) {
      setLoading(true);
      loginUser(data)
        .then((res) => {
          console.log(res);
          notifications.show({
            title: "Login Successfully",
            message: "Redirecting to home page...",
            withCloseButton: true,
            icon: <IconCheck style={{ width: "90%", height: "90%" }} />,
            color: "teal",
            withBorder: true,
            className: "!border-green-500",
          });

          dispatch(setJwt(res.jwt))
            const decoded = jwtDecode(res.jwt);
            
            dispatch(setUser({...decoded,email:decoded.sub}));
          setTimeout(() => {
            setLoading(false);
            
            navigate("/");
          }, 3000);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);

          notifications.show({
            title: "login failed",
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
    <>
      <LoadingOverlay
        visible={loading}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "brightSun.4", type: "bars" }}
      />
      <div className="w-1/2 sm-mx:w-full px-20 bs-mx:px-10 md-mx:px-5 flex flex-col justify-center gap-3">
        <div className="text-3xl font-semibold">Login</div>
        <TextInput
          error={formError.email}
          name="email"
          onChange={handleChange}
          value={data.email}
          withAsterisk
          leftSection={<IconAt size={16} />}
          label="Email"
          placeholder="Your email"
        />
        <PasswordInput
          error={formError.password}
          name="password"
          onChange={handleChange}
          value={data.password}
          withAsterisk
          leftSection={<IconLock size={18} stroke={1.5} />}
          label="Password"
          placeholder="Create you password"
        />
        <Button
          loading={loading}
          onClick={handleSubmit}
          autoContrast
          variant="filled"
        >
          Login
        </Button>
        <div className="mx-auto">
          Create an account{" "}
          <span
            className="text-bright-sun-400 hover:underline cursor-pointer"
            onClick={() => {
              navigate("/signup");
              setFormError(form);
              setData(form);
            }}
          >
            Sign Up
          </span>
        </div>
        <div
          onClick={open}
          className="text-bright-sun-400 hover:underline cursor-pointer text-center"
        >
          Forget Password ?
        </div>
      </div>
      <ResetPassword opened={opened} close={close} />
    </>
  );
};

export default Login;
