import { IconBookmark, IconBookmarkFilled, IconClockHour3 } from "@tabler/icons-react";
import React from "react";
import { Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { timeAgo } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";

const JobCard = (props: any) => {
    const dispatch = useDispatch();
    const profile = useSelector((state:any) => state.profile)
    const handleSaveJob = () =>{
        let savedJobs:any = Array.isArray(profile.savedJobs)
  ? [...profile.savedJobs]
  : [];
        if(savedJobs?.includes(props.id)){
            savedJobs = savedJobs?.filter((id:any)=>id!== props.id);

        }else{
            savedJobs=[...savedJobs,props.id];
        }
        let updateProfile = {...profile,savedJobs:savedJobs};
        dispatch(changeProfile(updateProfile))
    }
  return (
    <div
      className="bg-mine-shaft-800 rounded-xl p-4
       w-full sm:w-[300px] md:w-[320px] 
       flex flex-col gap-3
       sm-mx:w-full
        hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400"
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-900 rounded-md">
            <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div>
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-sm text-mine-shaft-400">
              {props.company} &#x2022;{" "}
              {props.applicants ? props.applicants.length : 0} Applicants
            </div>
          </div>
        </div>
        {profile.savedJobs?.includes(props.id)?<IconBookmarkFilled onClick={handleSaveJob} className=" text-bright-sun-400 cursor-pointer " />:<IconBookmark onClick={handleSaveJob} className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer " />}
      </div>
      <div className="flex gap-2 flex-wrap [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-700 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
        <div className="p-2 py-1 bg-mine-shaft-700 text-bright-sun-400 rounded-lg test-xs" >{props.experience}</div>
        <div className="p-2 py-1 bg-mine-shaft-700 text-bright-sun-400 rounded-lg test-xs" > {props.jobType}</div>
        <div className="p-2 py-1 bg-mine-shaft-700 text-bright-sun-400 rounded-lg test-xs" >{props.location}</div>
      </div>
      <Text
        className="!text-xs text-justify !text-mine-shaft-400"
        lineClamp={3}
      >
        {props.about}
      </Text>
      <Divider color="mineShaft.7" size="xs" />
      <div className="flex justify-between">
        <div className="font-semibold text-mine-shaft-200">
          &#8377;{props.packageOffered} LPA
        </div>
        <div className="text-mine-shaft-400 flex gap-1 text-xs items-center">
          <IconClockHour3 className="h-5 w-5" stroke={1.5} /> Posted{" "}
          {timeAgo(props.postTime)}
        </div>
      </div>
      <Link to={`/jobs/${props.id}`}>
      <Button fullWidth color="brightSun.4" variant="light">
        View Job
      </Button>
      </Link>
      
    </div>
  );
};

export default JobCard;
