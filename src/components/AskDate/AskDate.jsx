import React from 'react'
import './style.css'

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const AskDate = () => {
    const [startDate, setStartDate] = React.useState(new Date("2022/12/10"));
    const [endDate, setEndDate] = React.useState(new Date("2023/01/10"));
    return (
      <>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </>
    );
  };

export default AskDate