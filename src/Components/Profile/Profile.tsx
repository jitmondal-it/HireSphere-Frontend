//Profile.tsx component

import {
  Avatar,
  Divider,
  FileInput,
  Overlay,
} from "@mantine/core";


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Services/ProfileService";
import Info from "./Info";
import { changeProfile, setProfile } from "../../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Certificate from "./Certificate"
import { useHover } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { successNotification } from "../../Services/NotificationService";
import { getBase64 } from "../../Services/Utilities";

const Profile = (props: any) => {
  const dispatch = useDispatch();
  const profile = useSelector((state : any)=>state.profile);

  const { hovered, ref } = useHover();
  const handleFileChange = async(image:any) =>{
    let picture:any = await getBase64(image);
    let updatedProfile = {...profile,picture: picture.split(',')[1]}
    dispatch(changeProfile(updatedProfile));
     successNotification(
      "Success",
      "Profile Picture Updated Successfully...",
    );
  }
  
  return (
    <div className="w-4/5 lg-mx:w-full mx-auto">
      <div className="relative ">
        <img
          className="rounded-t-2xl w-full h-48 object-cover xs-mx:h-32"
          src="/Profile/banner.avif"
          alt=""
        />
        <div ref={ref} className="absolute flex items-center justify-center -bottom-1/3 md-mx:-bottom-10 sm-mx:-bottom-16 left-3">
        <Avatar
          className="rounded-full !h-48 !w-48 md-mx:!w-40 md-mx:!h-40 sm-mx:!w-36 sm-mx:!h-36 border-mine-shaft-900 border-8"
          src={profile.picture? `data:image/jpeg;base64,${profile.picture}`:"/avatar.png"}
          alt=""
        />
         {hovered && <Overlay className="!rounded-full" color="#000" backgroundOpacity={0.75} />}
         {hovered && <IconEdit className="absolute z-[300] !w-16 !h-16"/>}
         
          {hovered && <FileInput
          onChange={handleFileChange}
          className ="absolute [&_*]:rounded-full w-full [&_*]:!h-full !h-full z-[301] "
           size ="lg"
           variant="transparent"
           radius = "xl "
           accept="image/png,image/jpeg"
        />}
         
        </div>
      </div>
      <div className="px-3 mt-20">
      <Info/>
      </div>
      <Divider mx="xs" my="xl" />
      <About/>
      <Divider mx="xs" my="xl" />
      <Skills/>
      <Divider mx="xs" my="xl" />
      <Experiences/>
      <Divider mx="xs" my="xl" />
      <Certificate/>
    </div>
  );
};

export default Profile;
