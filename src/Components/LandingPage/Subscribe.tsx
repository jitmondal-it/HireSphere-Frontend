import { Button, TextInput } from "@mantine/core";
import React from "react";

const Subscribe = () => {
  return (
    <div className=" mt-20 pb-5
      flex items-center justify-around
      bg-mine-shaft-800
      mx-20 py-6 rounded-xl

      bs-mx:mx-10
      md-mx:mx-5

      sm-mx:flex-col
      sm-mx:gap-6
      sm-mx:px-4">
      <div className="text-5xl
        w-2/5
        text-center
        text-mine-shaft-100
        font-semibold

        lg-mx:text-4xl
        md-mx:text-3xl

        sm-mx:text-2xl
        sm-mx:w-full

        xs-mx:text-xl">
        Never miss the{" "}
        <span className="text-bright-sun-400">Opportunities</span>
      </div>
      <div className="flex items-center gap-3
        bg-mine-shaft-700
        px-3 py-2 rounded-xl

        sm-mx:w-full
        xs-mx:flex-col ">
        <TextInput
          className= " flex-1 [&input]:text-mine-shaft-100  xs-mx:w-full"
          variant="unstyled"
          placeholder="your@gmail.com"
          size="xl"
        />
        <Button className="!rounded-lg xs-mx:!w-full" size="lg" color="brightSun.4" variant="filled">Subscribe</Button>
      </div>
    </div>
  );
};

export default Subscribe;
