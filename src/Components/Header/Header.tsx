import { IconBriefcase, IconXboxX } from "@tabler/icons-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";
import { Burger, Button, Drawer, Indicator } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../Services/ProfileService";
import { setProfile } from "../../Slices/ProfileSlice";
import NotiMenu from "./NotiMenu";
import { jwtDecode } from "jwt-decode";
import { setUser } from "../../Slices/UserSlice";
import { setUpResponseInterceptor } from "../../Interceptor/AxiosInterceptor";
import { useDisclosure } from "@mantine/hooks";

const links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Job", url: "/post-job/0" },
    { name: "Posted Job", url: "/posted-job/0" },
    { name: "Job History", url: "/job-history" },
    //{ name: "SignUp", url: "/signup" }
  ];

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const token = useSelector((state: any) => state.jwt);

  useEffect(() => {
  setUpResponseInterceptor(navigate);
}, [navigate]);

useEffect(() => {
  if (token !== "") {
    try {
      if(localStorage.getItem("token") != ""){
        const decoded: any = jwtDecode(
          localStorage.getItem("token") || ""
        );

        dispatch(
          setUser({
            ...decoded,
            email: decoded.sub,
          })
        );
    }
    } catch (error) {
      console.log("Invalid token:", error);
    }
  }
}, [token, dispatch]);

useEffect(() => {
  if (user?.id) {
    getProfile(user.id)
      .then((data: any) => {
        dispatch(setProfile(data));
      })
      .catch((error: any) => {
        console.log("Profile Error:", error);
      });
  }
}, [user?.id, dispatch]);

  return location.pathname != "/signup" && location.pathname != "/login" ? (
    <div className="sticky top-0 z-50 w-full bg-mine-shaft-900/90 backdrop-blur-md text-white h-16 lg:h-20 flex justify-around items-center font-['poppins']">
      <div className="flex gap-2 items-center text-bright-sun-500 cursor-pointer hover:scale-105 transition-transform">
        <IconBriefcase className="h-10 w-10" stroke={1.5} />
        <div className="xs-mx:hidden text-2xl font-semibold">HireSphere</div>
      </div>

      <NavLinks />

      <div className="flex gap-3 items-center">
        {user ? (
          <ProfileMenu />
        ) : (
          <Link to="login">
            <Button variant="light" color="brightSun.3">
              Login
            </Button>
          </Link>
        )}
        {/*<div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>*/}

        {user ? <NotiMenu /> : <></>}
        {

        }
        <Burger className="lg:hidden" opened={opened} onClick={open} aria-label="Toggle navigation" />
        <Drawer size="xs" opened={opened} onClose={close}
         overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
          position="right" closeButtonProps={{
          icon: <IconXboxX size={30}  />,
        }}>

          {/* using You Tube */}
          {/* <div className="flex flex-col gap-6 items-center">
          {
            links.map((link, index) =>

      <div className="
         h-full flex items-center">
         <Link className="hover:text-bright-sun-400 text-xl" key={index} to={link.url}>
          {link.name}
        </Link>
      </div> 
      )
          }
          </div> */}

          {/* using GPT */}
          <div className="flex flex-col gap-2 mt-4">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                onClick={close}
                className={`px-4 py-3 rounded-lg text-lg transition-colors duration-200
                ${
                  location.pathname === link.url
                    ? "bg-bright-sun-400 text-mine-shaft-950"
                    : "text-mine-shaft-200 hover:bg-mine-shaft-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        
      </Drawer>
      </div>
    </div>
  ) : (
    <></>
  );
};
export default Header;
