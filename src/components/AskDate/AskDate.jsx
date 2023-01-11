import React from 'react'
import './style.css'

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const AskDate = () => {
    const [startDate, setStartDate] = React.useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
  };

export default AskDate