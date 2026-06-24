import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Job", url: "/post-job/0" },
    { name: "Posted Job", url: "/posted-job/0" },
    { name: "Job History", url: "/job-history" },
  ];

  const location = useLocation();

  return (
    <div className="flex gap-4 lg-mx:hidden h-full items-center">
      {links.map((link, index) => {
        const isActive =
          link.url.includes("/0")
            ? location.pathname.startsWith(link.url.replace("/0", ""))
            : location.pathname === link.url;

        return (
          <div
            key={index}
            className={`
              px-4 py-2 rounded-full flex items-center cursor-pointer
              transition-all duration-150
              ${
                isActive
                  ? "bg-bright-sun-400/15 text-bright-sun-400 border border-bright-sun-400/30"
                  : "text-mine-shaft-300 hover:bg-mine-shaft-800 hover:text-white"
              }
            `}
          >
            <Link to={link.url}>{link.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavLinks;