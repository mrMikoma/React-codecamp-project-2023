import React, { useState } from 'react';
import Select from 'react-select';

const AddTaskForm = () => {
  const minuteOptions = [
    { value: 'chocolate', label: '00' },
    { value: 'strawberry', label: '15' },
    { value: 'vanilla', label: '30' },
    { value: 'asd', label: '45' },
  ];

  const hourOptions = [
    { value: 'chocolate', label: '12' },
    { value: 'strawberry', label: '13' },
    { value: 'vanilla', label: '14' },
    { value: 'asd', label: '15' },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <form>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>Hour:</label>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={hourOptions}
      />
      <label>Minute:</label>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={minuteOptions}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddTaskForm;
/*
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
*/
