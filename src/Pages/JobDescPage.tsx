import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import JobDesc from "../Components/JobDesc/JobDesc";
import RecommendedJobs from "../Components/JobDesc/RecommendedJobs";
import { useEffect, useState } from "react";
import { getJob } from "../Services/JobService";

const JobDescPage = () => {
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
    <div className="min-h-[90vh] bg-mine-shaft-900 font-['popins'] px-6 ">
      <Link className="my-4 inline-block" to={"/find-jobs"}>
        <Button
          leftSection={<IconArrowLeft size={20} className="" />}
          color="brightSun.4"
          variant="light"
        >
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-[3fr_1.5fr] gap-6 max-w-[1400px] bs-mx:flex bs-mx:flex-wrap">
        <JobDesc {...job} />
        <div className="border-l border-mine-shaft-700 bs-mx:pl-0
      bs-mx:w-full bs-mx:border-0 pl-6 ml-auto bs-mx:flex bs-mx:flex-wrap justify-center">
          <RecommendedJobs />
        </div>
      </div>
    </div>
  );
};

export default JobDescPage;
