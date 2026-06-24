import React, { useState } from "react";
import MultiInput from "./MultiInput";
import { Button, Collapse, Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../../Data/JobData";
import { useDispatch } from "react-redux";
import { updateFilter } from "../../Slices/FilterSlice";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const SearchBar = () => {
  const matches = useMediaQuery('(max-width: 475px)');
  const [opened, { toggle }] = useDisclosure(false);
  const dispatch = useDispatch();
  const [value, setValue] = useState<[number, number]>([0, 300]);
  const handleChange = (event: any) => {
    dispatch(updateFilter({ salary: event }));
  };
  return (
    <div>
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
        <div className="flex px-5 lg-mx:flex-wrap py-8">
          {dropdownData.map((item, index) => (
            <>
              <div
                key={index}
                className="w-1/5 xs-mx:mb-1 xs-mx:w-full sm-mx:w-[48%] lg-mx:w-1/4 bs-mx:w-[30%]"
              >
                <MultiInput {...item} />
              </div>
              <Divider
                mr="xs"
                className="sm-mx:hidden"
                size="xs"
                orientation="vertical"
              />
            </>
          ))}
          <div
            className="w-1/5 lg-mx:mt-7 lg-mx:w-1/4 bs-mx:w-[30%]
              sm-mx:w-[48%] xs-mx:w-full xs-mx:mb-1
              [&_[data-mantine-slider-label]]:!top-auto 
              [&_[data-mantine-slider-label]]:!bottom-[-28px]"
          >
            <div className="flex justify-between">
              <div>Salary</div>
              <div>
                &#8377;{value[0]} LPA - &#8377;{value[1]} LPA
              </div>
            </div>
            <RangeSlider
              labelTransitionProps={{
                transition: "slide-down",
                duration: 300,
                timingFunction: "Linear",
              }}
              onChangeEnd={handleChange}
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
