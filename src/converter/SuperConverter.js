import React, { useState } from 'react';
import MinutesToHours from './MinutesToHours';
import KmToMiles from './KmToMiles';

export default function SuperConverter() {
  const [index, setIndex] = useState('-1');
  const onSelect = (e) => {
    setIndex(e.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <hr />
      <select value={index} onChange={onSelect}>
        <option value='-1'>--- select ---</option>
        <option value='0'>Minutes & Hours</option>
        <option value='1'>Km & Miles</option>
      </select>
      {index === '-1' && 'Please Select your units'}
      {index === '0' && <MinutesToHours />}
      {index === '1' && <KmToMiles />}
    </div>
  );
}
