import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProfile } from "../../Services/ProfileService";
import { useMediaQuery } from "@mantine/hooks";

const Profile = (props: any) => {
  const matches = useMediaQuery('(max-width: 475px)');
  const {id} = useParams();
  const [profile,setProfile] = useState<any>({});
  useEffect(()=>{
    window.scrollTo(0,0);
    getProfile(id).then((res)=>{
      setProfile(res)
    }).catch((err)=>{
      console.log(err);
      
    })
  },[id])
  return (
    <div className="w-full">
     <div className="relative">
  {/* Banner */}
  <img
    className="
      w-full object-cover rounded-t-2xl
      h-48
      md-mx:h-40
      sm-mx:h-32
      xs-mx:h-28
      xsm-mx:h-24
    "
    src="/Profile/banner.avif"
    alt=""
  />

  {/* Profile Image */}
  <img
    className="
      absolute left-3 rounded-full border-8 border-mine-shaft-900

      h-48 w-48 -bottom-1/3

      lg-mx:h-40 lg-mx:w-40
      md-mx:h-32 md-mx:w-32 md-mx:border-6

      sm-mx:h-28 sm-mx:w-28 sm-mx:border-4
      sm-mx:-bottom-12

      xs-mx:h-24 xs-mx:w-24
      xs-mx:left-2
      xs-mx:-bottom-10

      xsm-mx:h-20 xsm-mx:w-20
      xsm-mx:border-2
      xsm-mx:-bottom-8
    "
    src={profile.picture ? `data:image/jpeg;base64,${profile.picture}`  : "/avatar.png" }
    alt=""
  />
</div>
      <div className="px-3 mt-20">
        <div className="text-3xl xs-mx:text-2xl font-semibold flex justify-between">
          {profile?.name}
          <Button color="brightSun.4" size={matches?"sm":"md"} variant="light">
            Message
          </Button>
        </div>
        <div className="text-lg xs-mx:text-base flex gap-1 items-center">
          <IconBriefcase className="h-5 w-5 " stroke={1.5} />
          {profile?.jobTitle} &bull; {profile?.company}
        </div>
        <div className="text-mine-shaft-400 xs-mx:text-base flex items-center gap-1 text-lg">
          <IconMapPin className="h-5 w-5 " stroke={1.5} /> {profile?.location}
        </div>
         <div className="text-mine-shaft-400 xs-mx:text-base flex items-center gap-1 text-lg">
          <IconBriefcase className="h-5 w-5 " stroke={1.5} />Experience: {profile?.totalExp} Years
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl  font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {profile?.about}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl  font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
          {profile?.skills?.map((skill: any, index: any) => (
            <div
              key={index}
              className="bg-bright-sun-400 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3 ">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <div className="flex flex-col gap-8">
          {profile?.experiences?.map((exp: any, index: any) => (
            <ExpCard key={index} {...exp} />
          ))}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Certifications</div>
        <div className="flex flex-col sm-mx:text-sm gap-8">
          {profile?.certifications?.map((certi: any, index: any) => (
            <CertiCard key={index} {...certi} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
