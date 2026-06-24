import {
  IconCalendarMonth,
  IconClockHour3,
  IconHeart,
  IconMapPin,
} from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import { Avatar, Button, Divider, Modal, Text } from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { DateInput, DateValue, TimeInput } from "@mantine/dates";
import { getProfile } from "../../Services/ProfileService";
import { changeAppStatus } from "../../Services/JobService";
import {
  errorNotification,
  successNotification,
} from "../../Services/NotificationService";
import { formatInterviewTime, openBase64PDF } from "../../Services/Utilities";

const TalentCard = (props: any) => {
  const { id } = useParams();
  const [opened, { open, close }] = useDisclosure(false);
  const [app, { open: openApp, close: closeApp }] = useDisclosure(false);
  const [date, setDate] = useState<DateValue>(null);
  const [time, setTime] = useState<any>(null);
  const ref = useRef<HTMLInputElement>(null);
  const [profile, setProfile] = useState<any>({});

  useEffect(() => {
    if (props.applicantId)
      getProfile(props.applicantId)
        .then((res) => {
          setProfile(res);
        })
        .catch((err) => {
          console.log(err);
        });
    else setProfile(props);
  }, [props]);

  const handleOffer = (status: string) => {
    let interview: any = {
      id,
      applicantId: profile?.id,
      applicationStatus: status,
    };
    if(status == "INTERVIEWING"){    
    if (!date || !time) return;
    const [hours, minutes] = time.split(":").map(Number);
    const updatedDate = new Date(date);
    updatedDate.setHours(hours, minutes);
    interview = {
  ...interview,
  interviewTime: updatedDate,
};
    }

    changeAppStatus(interview)
      .then((res) => {
        if(status == "INTERVIEWING")successNotification(
          "Interview Schedule",
          "Interview schedule successfully",
        );
        else if(status == "OFFERED") successNotification("Offered","Offered has been sent successfully")
        else successNotification("Rejected","Applicant has been rejected")
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        errorNotification("Error", err.response.data.errorMessage);
      });
  };

  return (
    <div className="bg-mine-shaft-800 bs-mx:w-[48%] md-mx:w-full rounded-xl p-4 w-80 flex flex-col gap-3 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Avatar
            className="rounded-full"
            size="lg"
            variant="light"
            src={
              profile?.picture
                ? `data:image/jpeg;base64,${profile?.picture}`
                : "/avatar.png"
            }
          />

          <div>
            <div className="font-semibold text-lg">{props.name}</div>
            <div className="text-sm text-mine-shaft-400">
              {profile?.jobTitle} &#x2022; {profile?.company}
            </div>
          </div>
        </div>

        <IconHeart className="text-mine-shaft-300 cursor-pointer" />
      </div>

      {/* TOP SKILLS */}
      <div className="flex gap-2 flex-wrap [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-700 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
        {profile?.skills?.slice(0, 8).map((skill: string, index: number) => (
       <div key={index}>{skill}</div>
       ))}

        {profile?.skills?.length > 8 && (
          <div>
            +{profile.skills.length - 8}
          </div>
        )}
      </div>

      {/* ABOUT */}
      <Text
        className="!text-xs text-justify !text-mine-shaft-400"
        lineClamp={3}
      >
        {profile.about}
      </Text>

      <Divider color="mineShaft.7" size="xs" />
      {props.invited ? (
        <div className="flex gap-1 text-mine-shaft-200 text-sm items-center">
          <IconCalendarMonth stroke={1.5} /> Interview :{" "}
          {formatInterviewTime(props.interviewTime)}
        </div>
      ) : (
        <div className="flex justify-between items-center text-sm">
          <div className=" text-mine-shaft-300">Exp: {props.totalExp?props.totalExp : 1} Years</div>

          <div className="text-mine-shaft-400 flex items-center gap-1">
            <IconMapPin className="h-5 w-5" /> {profile?.location}
          </div>
        </div>
      )}

      <Divider color="mineShaft.7" size="xs" />

      {/* BUTTONS */}
      <div className="flex gap-3">
        {!props.invited && (
          <>
            <Link
              to={`/talent-profie/${profile?.id}`}
              className="flex-1 border border-bright-sun-400 text-bright-sun-400 py-[6px] rounded-md text-center text-sm font-semibold hover:bg-bright-sun-400 hover:text-black transition"
            >
              Profile
            </Link>

            {props.posted ? (
              <Button
                onClick={open}
                rightSection={<IconCalendarMonth className="w-5 h-5" />}
                color="brightSun.4"
                variant="light"
                className="flex-1"
              >
                Schedule
              </Button>
            ) : (
              <Button className="flex-1 bg-mine-shaft-700 text-mine-shaft-200 py-2 rounded-md hover:bg-mine-shaft-600 transition">
                Message
              </Button>
            )}
          </>
        )}
        {props.invited && (
          <>
            <div>
              <Button color="brightSun.4" onClick={()=>handleOffer("OFFERED")} variant="outline" fullWidth>
                Accept
              </Button>
            </div>
            <div>
              <Button color="brightSun.4" onClick={()=>handleOffer("REJECTED")} variant="light" fullWidth>
                Reject
              </Button>
            </div>
          </>
        )}
      </div>
      {(props.invited || props.posted) && (
        <Button color="brightSun.4" variant="filled" fullWidth onClick={openApp} autoContrast>
          View Application
        </Button>
      )}
      <Modal
        opened={opened}
        onClose={close}
        title="Schedule Interview"
        centered
      >
        <div className="flex flex-col gap-4">
          <DateInput
            value={date}
            minDate={new Date()}
            onChange={setDate}
            label="Date"
            placeholder="Enter Date"
          />
          <TimeInput
            value={time}
            onChange={(event) => setTime(event.currentTarget.value)}
            label="Time"
            ref={ref}
            onClick={() => ref.current?.showPicker()}
          />
          <Button
            onClick={() => handleOffer("INTERVIEWING")}
            color="brightSun.4"
            variant="light"
            fullWidth
          >
            Shedule
          </Button>
        </div>
      </Modal>
      <Modal
        opened={app}
        onClose={closeApp}
        title="Application"
        centered
      >
        <div className="flex flex-col gap-4">
          <div>
            Email:&emsp;
            <a
              className="text-bright-sun-400 hover:underline cursor-pointer"
              href={`mailto:${props.email}`}
            >
              {props.email}
            </a>
          </div>
          <div>
            Website:&emsp;
            <a
              target="_blank"
              className="text-bright-sun-400 hover:underline cursor-pointer"
              href={props.website}
            >
              {props.website}
            </a>
          </div>
          <div>
            Resume:&emsp;
            <span
              className="text-bright-sun-400 hover:underline cursor-pointer"
             onClick={()=>openBase64PDF(props.resume)}
            >
              {props.name}
            </span>
          </div>
          <div>
            Cover Letter:&emsp;
            <div>
              {props.coverLetter}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TalentCard;
