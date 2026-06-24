import { IconArrowLeft } from "@tabler/icons-react";

import { Button, Divider } from "@mantine/core";
import { Link, useNavigate, useParams } from "react-router-dom";
import ApplyJobComp from "../Components/ApplyJob/ApplyJobComp";
import { useEffect, useState } from "react";
import { getJob } from "../Services/JobService";

const ApplyJobPage = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [job,setJob] = useState<any>(null);
  useEffect(() =>{
    window.scrollTo(0,0);
    getJob(id).then((res) =>{
      setJob(res);
    }).catch((err) =>{
      console.log(err)
    })
  },[id])
  return (
    <div className="min-h-[100vh] bg-mine-shaft-900 font-['popins'] px-6">
      <Button
        my = "md"
        mb="xs"
        onClick={()=> navigate(-1)}
        leftSection={<IconArrowLeft size={20} className="" />}
        color="brightSun.4"
        variant="light"
      >
        Back
      </Button>

      <ApplyJobComp {...job}/>
    </div>
  );
};

export default ApplyJobPage;
