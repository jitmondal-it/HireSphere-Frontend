import { Button } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] bg-mine-shaft-900 flex flex-col items-center justify-center text-center px-5">
      <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
        <IconLock size={50} className="text-red-500" />
      </div>

      <div className="text-6xl font-bold text-mine-shaft-100">
        403
      </div>

      <div className="text-2xl font-semibold text-mine-shaft-100 mt-3">
        Access Denied
      </div>

      <div className="text-mine-shaft-300 mt-3 max-w-md">
        You do not have permission to access this page.
      </div>

      <Button
        mt="xl"
        color="brightSun.4"
        onClick={() => navigate("/")}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default Unauthorized;