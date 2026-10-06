import React, { useState } from "react";
import { Button, Collapse, Divider, Input, RangeSlider } from "@mantine/core";
import MultiInput from "../FindJobs/MultiInput";
import { IconUserCircle } from "@tabler/icons-react";
import { searchFields } from "../../Data/TalentData";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const SearchBar = () => {
  const dispatch = useDispatch();
  const matches = useMediaQuery('(max-width: 475px)');
  const [opened, { toggle }] = useDisclosure(false);
  const [value, setValue] = useState<[number, number]>([0, 50]);
  const [name,setName] = useState('');
  const handleChange=(name:any,event:any)=>{
    if(name == "exp") dispatch(updateFilter({exp:event}))
    else{
      setName(event.target.value);
      dispatch(updateFilter({name:event.target.value}))
   }
  }
  return ( <div>
          <div className="flex justify-end">
            {matches&&<Button
              onClick={toggle}
              m="sm"
              radius="lg"
              variant="outline"
              color="brightSun.4"
            >
              {opened ? "Close" : "Filters"}
            </Button>}
          </div>
    
          <Collapse in={(opened || !matches)}>
    <div className="flex px-5 py-8 lg-mx:flex-wrap items-center !text-mine-shaft-100 ">
      <div className="sm-mx:w-[48%] xs-mx:mb-1 xs-mx:w-full lg-mx:w-1/4 bs-mx:w-[30%] flex items-center">
        <div className="text-bright-sun-400 bg-mine-shaft-800 rounded-full p-1 mr-2"><IconUserCircle size={20}/></div>
        <Input defaultValue={name} onChange={(e)=>handleChange("name",e)}className="[&_input]:!placeholder-mine-shaft-500" variant="unstyled" placeholder="Talent name" />
      </div>

      {searchFields.map((item, index) => {
        return <React.Fragment key={index} >
          <div className="w-1/5 xs-mx:mb-1 sm-mx:w-[48%] lg-mx:w-1/4 bs-mx:w-[30%] xs-mx:w-full">
            <MultiInput title = {item.title} icon={item.icon} options={item.options} />
          </div>
          <Divider className="sm-mx:hidden" mr="xs" size="xs" orientation="vertical" />
        </React.Fragment>
     })}
      <div
        className="w-1/5 lg-mx:mt-7 lg-mx:w-1/4 bs-mx:w-[30%]
        sm-mx:w-[48%] xs-mx:w-full xs-mx:mb-1
  [&_[data-mantine-slider-label]]:!top-auto 
  [&_[data-mantine-slider-label]]:!bottom-[-28px]"
      >
        <div className="flex justify-between">
          <div>Experience (year)</div>
          <div>
            {value[0]}  - {value[1]}
          </div>
        </div>
        <RangeSlider
          labelTransitionProps={{
            transition: "slide-down",
            duration: 300,
            timingFunction: "Linear",
          }}
          onChangeEnd={(e)=>handleChange("exp",e)}
          max={50}
          min={1}
          minRange={1}
          size="xs"
          color="brightSun.4"
          value={value}
          onChange={setValue}
          classNames={{
            label: "!translate-y-10",
          }}
        />
      </div>
    </div>
    </Collapse>
    </div>
  );
};

export default SearchBar;
