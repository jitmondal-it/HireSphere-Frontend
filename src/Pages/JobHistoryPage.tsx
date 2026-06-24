import { Divider } from "@mantine/core";
import React from "react";
import JobHistory from "../Components/JobHistory/JobHistory";


const JobHistoryPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-900 font-['popins'] px-6">
      <Divider size="xs" />
      <div className="my-5"></div>
      <JobHistory/>
    </div>
  );
};

export default JobHistoryPage;
