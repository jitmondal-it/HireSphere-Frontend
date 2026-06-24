import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import Company from "../Components/CompanyProfile/Company";
import SimilarCompinies from "../Components/CompanyProfile/SimilarCompinies";

const CompanyPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100vh] bg-mine-shaft-900 font-['popins'] px-6">
      <Button
        onClick={() => navigate(-1)}
        my="md"
        leftSection={<IconArrowLeft size={20} className="" />}
        color="brightSun.4"
        variant="light"
      >
        Back
      </Button>
      <div className="grid grid-cols-[3fr_1.5fr] gap-8 max-w-[1400px]">
        <Company />
        <div className="">
          <SimilarCompinies />
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
