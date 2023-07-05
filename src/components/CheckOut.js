import React, { useState } from "react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

import { BsCalendar } from "react-icons/bs";

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false);
  return (
    <div className="relative bg-white flex items-center   w-full h-full">
    {/* icon */}
    <div className="absolute  items-center inset-0 lg:inset-none justify-between   flex lg:flex-row">
      <DatePicker
        className="w-full h-[55px] lg:w-[70px] lg:h-[64px] "
        selected={endDate}
        placeholderText="Check Out"
        onChange={(date) => setEndDate(date)}
      />
      <BsCalendar className="text-accent text-base  mr-8" />
    </div>
  </div>
  );
};

export default CheckOut;
