import { Carousel } from "@mantine/carousel";
import React from "react";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { jobCategory } from "../../Data/data";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-3xl text-center text-mine-shaft-100 mb-3 font-semibold">
        Browse <span className="text-bright-sun-400">job</span> Catagory
      </div>

      <div className=" text-lg mx-auto text-mine-shaft-300 text-center w-1/2">
        Explore diverse job opportunities tailored to your skills.Start your
        career journey today
      </div>
      <Carousel
        slideSize="22%"
        slideGap="xs"
        emblaOptions={{ loop: true }}
        nextControlIcon={<IconArrowRight size={25} stroke={2} />}
        previousControlIcon={<IconArrowLeft size={25} stroke={2} />}
        classNames={{
          control:
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-mine-shaft-900 border border-bright-sun-400 text-bright-sun-400 hover:bg-bright-sun-400 hover:text-black shadow-md",
        } }
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div
              className="flex flex-col items-center w-64 h-60 mt-10 
      border border-mine-shaft-700 bg-mine-shaft-800/50 backdrop-blur-sm p-5 rounded-xl 
      justify-between text-center hover:cursor-pointer hover:-translate-y-2 hover:border-bright-sun-400 hover:shadow-[0_0_20px_rgba(255,200,0,0.15)]  my-5 transition duration-300 ease-in-out !shadow-bright-sun-300"
            >
              <div className="w-16 h-16 rounded-2xl
                bg-mine-shaft-900
                border border-mine-shaft-700
                flex items-center justify-center
                group-hover:border-bright-sun-400
                transition-all duration-300">
                <img
                  className="h-8 w-8"
                  src={category.image}
                  alt={category.name}
                />
              </div>

              <div className="text-mine-shaft-100 text-xl font-semibold h-14 flex items-center justify-center">
                {category.name}
              </div>

              <div className="text-sm text-mine-shaft-300 h-12">
                {category.description}
              </div>

              <div className="text-bright-sun-300  text-sm font-medium">
                {category.jobs} new jobs posted
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
