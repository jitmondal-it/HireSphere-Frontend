import { Avatar, Rating } from "@mantine/core";

import { testimonials } from "../../Data/data";
import { IconQuote } from "@tabler/icons-react";


const Testimonials = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-3xl text-center  sm-mx:text-2xl xs-mx:text-xl text-mine-shaft-100 mb-3 font-semibold">
        What<span className="text-bright-sun-400"> User </span>Says About Us ?
      </div>
      <div className=" grid
          grid-cols-4
          gap-2
          p-2
          lg-mx:grid-cols-2
          sm-mx:grid-cols-1">
        {testimonials.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-3
            bg-mine-shaft-800/60
            border border-mine-shaft-700
            rounded-xl
            p-4
            mt-7
            w-full
            transition-all duration-300
            hover:-translate-y-2
            hover:border-bright-sun-400
            hover:shadow-[0_0_20px_rgba(255,200,0,0.15)]
            xs-mx:p-3"
          >
            <div className="flex gap-2 items-center">
              <Avatar className="!h-14 !w-14 border-2 border-bright-sun-400" src="avatar.png" alt="it's me" />
              <div>
                <div className="text-lg text-mine-shaft-100 font-semibold">
                  {data.name}
                </div>
                <Rating value={data.rating} fractions={2} readOnly />
              </div>
            </div>
            <IconQuote
              size={22}
              className="text-bright-sun-400 opacity-70"
            />
            <div className="text-xs text-mine-shaft-300 text-balance">
              {data.testimonial}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
