import React from "react";
import "./style.css";

import DatePicker from "react-datepicker";

const TimePicker = ({selectedTime, setSelectedTime}) => {
  return (
    <DatePicker
      selected={selectedTime}
      onChange={(date) => setSelectedTime(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="H:mm"
    />
  );
};

export default TimePicker;
