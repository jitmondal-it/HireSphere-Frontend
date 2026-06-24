
import { Avatar } from "@mantine/core";
import { work } from "../../Data/data";

const Working = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-3xl text-center text-mine-shaft-100 mb-3 font-semibold">
        How It <span className="text-bright-sun-400">Works</span>
      </div>

      <div className=" text-lg mx-auto text-mine-shaft-300 text-center w-1/2  md-mx:w-3/4
      sm-mx:w-full
      sm-mx:text-base">
        Effortlessly navigate through the process and find your dream jobs
      </div>
      <div className="flex px-20 items-center justify-between bs-mx:px-10
          md-mx:px-5
          md-mx:flex-col
          md-mx:gap-10">
        <div className="relative">
          <img className="w-[40rem] lg-mx:w-[32rem]
            md-mx:w-[28rem]
            sm-mx:w-[22rem]
            xs-mx:w-[18rem]" src="/Working/Pic-3.webp" />
          <div className="w-36 sm-mx:w-28  top-[23%] right-8 absolute sm-mx:right-3 xs-mx:right-0
          sm-mx:top-[18%] xs-mx:scale-70 xs-mx:origin-top-right xs-mx:scale-60 flex flex-col items-center gap-1 border border-bright-sun-400 
           rounded-xl py-3 px-3 backdrop-blur-md">
            <Avatar className="!h-16 !w-16 sm-mx:!h-10 sm-mx:!w-10" src = "avatar.png" alt="it's me" />
            <div className="text-sm font-semibold text-mine-shaft-100 text-center">Complete Your Profile</div>
            <div className="text-xs text-mine-shaft-300">70% Completed</div>
          </div>
        </div>

        <div className="flex flex-col gap-10 md-mx:w-full sm-mx:gap-6">
          {
            work.map((item,index) =>
            <div key = {index} className="flex items-center gap-4 xs-mx:flex-col xs-mx:text-center">
            <div className="p-2.5 bg-bright-sun-300 rounded-full">
              
              <img className = "h-12 w-12 xs-mx:h-10 xs-mx:w-10 " src={item.image} alt={item.name} />
            </div>
            <div>
              <div className="text-mine-shaft-200 text-xl font-semibold">{item.name}</div>
              <div className="text-mine-shaft-300">
                {item.desc}
              </div>
            </div>
          </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Working;
