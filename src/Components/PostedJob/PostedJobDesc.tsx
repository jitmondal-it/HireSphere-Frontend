import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";

import TalentCard from "../FindTalent/TalentCard";
import { useEffect, useState } from "react";

const PostedJobDesc = (props: any) => {
  const [tab,setTab] = useState("overview");
  const [arr,setArr] = useState<any>([]);
  const handleTabChange = (value:any) =>{
      setTab(value);
      if(value == "applicants"){
        setArr(props.applicants
                    ?.filter((x: any) => x.applicationStatus == "APPLIED"))
      }else if(value == "invited"){
        setArr(props.applicants
                    ?.filter((x: any) => x.applicationStatus == "INTERVIEWING"))
      }else if(value == "offered"){
        setArr(props.applicants
                    ?.filter((x: any) => x.applicationStatus == "OFFERED"))
      }else if(value == "rejected"){
        setArr(props.applicants
                    ?.filter((x: any) => x.applicationStatus == "REJECTED"))
      }
  }
  useEffect(()=>{
    handleTabChange("overview");
  },[props])
  return (
    <>
      {props.jobTitle ? (
        <div className="mt-5 w-3/4 px-5 md-mx:w-full md-mx:p-0">
          <div className="text-2xl xs-mx:text-xl font-semibold flex items-center">
            {props.jobTitle}

            <Badge variant="light" ml="sm" size="sm" color="brightSun.4">
              {props.jobStatus}
            </Badge>
          </div>

          <div className="font-medium xs-mx:text-sm text-mine-shaft-300 mb-5">
            {props.location}
          </div>

          <div>
            <Tabs variant="outline" radius="lg" value={tab} onChange={handleTabChange} >
              <Tabs.List className="font-semibold
                  mb-5

                  [&_button]:text-xs
                  [&_button]:px-2

                  sm:[&_button]:text-sm
                  sm:[&_button]:px-3

                  md:[&_button]:text-base
                  md:[&_button]:px-4

                  lg:[&_button]:text-lg
                  lg:[&_button]:px-5

                  [&_button[data-active='true']]:text-bright-sun-400">
                <Tabs.Tab value="overview">Overview</Tabs.Tab>
                <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                <Tabs.Tab value="invited">Invited</Tabs.Tab>
                <Tabs.Tab value="offered">Offered</Tabs.Tab>
                <Tabs.Tab value="rejected">Rejected</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="overview" className="[&>div]:w-full">
                <JobDesc {...props} edit={true} closed={props.jobStatus == "CLOSED"} />
              </Tabs.Panel>

              <Tabs.Panel value="applicants">
                <div className="justify-around mt-10 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
                  {arr?.length?arr
                    .map((talent: any, index: any) => (
                      <TalentCard key={index} {...talent} posted />
                    )) : <div className="test-2xl flex justify-center font-semibold">No Applicants</div>}
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="invited">
                <div className="justify-around mt-10 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
                  {arr?.length?arr
                    .map((talent: any, index: any) => (
                      <TalentCard key={index} {...talent} invited />
                    )):<div className="test-2xl flex justify-center font-semibold">No Invited Candidates Till Now...</div>}
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="offered">
                <div className="justify-around mt-10 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
                  {arr?.length?arr
                    .map((talent: any, index: any) => (
                      <TalentCard key={index} {...talent} offered />
                    )):<div className="test-2xl flex justify-center font-semibold">No Offered Candidates</div>}
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="rejected">
                <div className="justify-around mt-10 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
                  {arr?.length? arr
                    .map((talent: any, index: any) => (
                      <TalentCard key={index} {...talent} offered />
                    )):<div className="test-2xl flex justify-center font-semibold">No Rejected Candidates</div>}
                </div>
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
      ) : (
        <div className="text-2xl font-semibold min-h-[70vh] flex w-full justify-center items-center">
          No Job Selected
        </div>
      )}
    </>
  );
};

export default PostedJobDesc;