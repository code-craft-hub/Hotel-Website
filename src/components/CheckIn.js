import React, { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

import { BsCalendar } from "react-icons/bs";

const CheckIn = () => {
  const [startDate, setstartDate] = useState(false);

  // w-full h-full flex items-center justify-between px-8
  return (
    <div className="relative bg-white flex items-center   w-full h-full">
      {/* icon */}
      <div className="absolute  items-center inset-0 lg:inset-none justify-between   flex lg:flex-row">
        <DatePicker
          className="w-[60px] h-[55px] lg:w-[64px] lg:h-[64px] "
          selected={startDate}
          placeholderText="Check in"
          onChange={(date) => setstartDate(date)}
        />
        <BsCalendar className="text-accent text-base  mr-8" />
      </div>
    </div>
  );
};

export default CheckIn;
