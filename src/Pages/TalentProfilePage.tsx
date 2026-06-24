import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { profile } from "../Data/TalentData";
import Profile from "../Components/TalentProfile/Profile";
import RecommendTalent from "../Components/TalentProfile/RecommendTalent";
import { useEffect, useState } from "react";
import { getAllProfiles } from "../Services/ProfileService";

const TalentProfilePage = () => {
  const navigate = useNavigate();
  const [talents,setTalents] = useState<any[]>([])
  useEffect(()=>{
    getAllProfiles().then((res)=>{
      setTalents(res);
    }).catch((err)=>{
      console.log(err);
      
    })
  },[])
  return (
    <div className="min-h-[100vh] bg-mine-shaft-900 font-['popins'] px-6"> 
        <Button
          leftSection={<IconArrowLeft size={20} className="" />}
          color="brightSun.4"
          variant="light"
          my="sm"
          onClick={()=>navigate(-1)}
        >
          Back
        </Button>
      <div className="grid grid-cols-[4fr_1fr] gap-12 max-w-[1400px] bs-mx:grid-cols-1
    bs-mx:gap-6  ">
        <Profile {...profile} />
        <RecommendTalent talents = {talents} />
      </div>
    </div>
  );
};

export default TalentProfilePage;
