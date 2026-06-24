import { Button, TextInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";
import fields from "../../Data/Profile";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDispatch, useSelector } from "react-redux";
import { successNotification } from "../../Services/NotificationService";
import { changeProfile } from "../../Slices/ProfileSlice";
import { useMediaQuery } from "@mantine/hooks";

const CertiInput = (props: any) => {
  const dispatch = useDispatch();
  const select = fields;
  const profile = useSelector((state:any) =>state.profile)
  const form = useForm({
      mode: "controlled",
      validateInputOnChange: true,
      initialValues: {
        name: "",
        issuer: "",
        description: "",
        issueDate: new Date(),
        certificateId : ""
     
      },
      validate: {
        name:isNotEmpty("Name is required"),
        issuer:isNotEmpty("Issuer is required"),
        issueDate:isNotEmpty("issue date is required"),
        certificateId:isNotEmpty("certificate Id is required")
      },
    });
    const handleSave = () =>{
      form.validate();
      if(!form.isValid()) return;
      let certi = [...profile.certifications]
      certi.push(form.getValues());
      certi[certi.length - 1].issueDate =
      new Date(certi[certi.length - 1].issueDate).toISOString();
      let updatedProfile = {...profile,certifications:certi};
      props.setEdit(false);
     dispatch(changeProfile(updatedProfile));
     successNotification(
      "Success",
      "Certificate Added Successfully...",
    );
    }
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2 xs-mx:[&>*]:w-full xs-mx:gap-4 xs-mx:flex-wrap">
        <TextInput {...form.getInputProps("name")} label="Title" withAsterisk placeholder="Enter Title" />
        <SelectInput form = {form} name="issuer" {...select[1]} />
      </div>

      <div className="flex gap-10 [&>*]:w-1/2 xs-mx:[&>*]:w-full xs-mx:gap-4 xs-mx:flex-wrap">
        <MonthPickerInput
         {...form.getInputProps("issueDate")}
          withAsterisk
          maxDate={new Date()}
          label="Issue date"
          placeholder="Pick date"
         
        />
        <TextInput   {...form.getInputProps("certificateId")} label="Certificate Id" withAsterisk placeholder="Enter Id" />
      </div>

      <div className="flex gap-5">
        <Button
          onClick={handleSave}
          color="green.8"
          variant="light"
        >
          Save
        </Button>
        <Button
          onClick={() => props.setEdit(false)}
          color="red.8"
          variant="light"
        >
          Discard
        </Button>
      </div>
    </div>
  );
};

export default CertiInput;

