import {
  IconBookmark,
  IconBookmarkFilled,
  IconCalendarMonth,
  IconClockHour3,
} from "@tabler/icons-react";
import { Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { timeAgo } from "../../Services/Utilities";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../Slices/ProfileSlice";

const Card = (props: any) => {
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
      className="bg-mine-shaft-800 rounded-xl p-4 w-full sm:w-[300px] md:w-[320px] flex flex-col gap-3 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400"
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="p-2 bg-mine-shaft-900 rounded-md shrink-0">
            <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
          </div>
          <div>
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-sm text-mine-shaft-400">
              {props.company} &#x2022; {props.applicants ? props.applicants.length : 0} Applicants
            </div>
          </div>
        </div>
        {profile.savedJobs?.includes(props.id)?<IconBookmarkFilled onClick={handleSaveJob} className=" text-bright-sun-400 cursor-pointer " />:<IconBookmark onClick={handleSaveJob} className="text-mine-shaft-300 hover:text-bright-sun-400 cursor-pointer " />}
      </div>
      <div className="flex flex-wrap gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-700 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
        <div>{props.experience}</div>
        <div> {props.jobType}</div>
        <div>{props.location}</div>
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
          <IconClockHour3 className="h-5 w-5" stroke={1.5} />{" "}
          {props.applied || props.interviewing ? "Applied" : props.offered ? "Interviewed" : "Posted"}{" "}
          {timeAgo(props.postTime)} 
        </div>
      </div>
      {(props.offered || props.interviewing) &&<Divider color="mineShaft.7" size="xs" />}
      {
        props.offered &&<div className="flex gap-2">
          <Button color="brightSun.4" variant="outline" fullWidth>
            Accept
          </Button>
          <Button color="brightSun.4" variant="light" fullWidth>
            Reject
          </Button>
        </div>
      }
      {
        props.interviewing &&<div className="flex gap-1  text-sm items-center">
          <IconCalendarMonth className="text-bright-sun-400 w-5 h-5" stroke={1.5} /> Sunday, November 24 &bull;<span className="text-mine-shaft-400">10:00 AM</span>
        
        </div>
      }
      <Link to={`/jobs/${props.id}`}>
            <Button fullWidth color="brightSun.4" variant="outline">
              View Job
            </Button>
            </Link>
    </div>
  );
};

export default Card;
