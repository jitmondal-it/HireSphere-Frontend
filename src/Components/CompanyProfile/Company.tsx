import { Avatar, Button, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

const Company = () => {
  return (
    <div className="w-full max-w-4xl">
      <div className="relative ">
        <img
          className="rounded-t-2xl w-full h-48 object-cover"
          src="/Profile/banner.avif"
          alt=""
        />
        <img
          className="rounded-3xl p-2 h-36 w-36 bg-mine-shaft-800 -bottom-1/4 absolute left-5 border-mine-shaft-900 border-8 "
          src="/Icons/Google.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-12">
        <div className="text-3xl font-semibold flex justify-between">
          Google
          <Avatar.Group>
            <Avatar src="avatar.png" />
            <Avatar src="im1.png" />
            <Avatar src="im3.png" />
            <Avatar>+10k</Avatar>
          </Avatar.Group>
        </div>
        <div className="text-mine-shaft-400 flex items-center gap-1 text-lg">
          <IconMapPin className="h-5 w-5 " stroke={1.5} /> kalyani ,Nadia
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div>
        <Tabs variant="outline" radius="lg" defaultValue="about">
          <Tabs.List className="[&_button]:text-lg  font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            <Tabs.Tab value="employees">Employees</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
          <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
          <Tabs.Panel value="employees"><CompanyEmployees/></Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Company;
