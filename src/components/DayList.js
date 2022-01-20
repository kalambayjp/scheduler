import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const {value, days, onChange} = props;
  const weekDays = days.map((singleDay, i) => <DayListItem key={i} {...singleDay} selected={singleDay.name === value} onChange={onChange} />)

  return (
    <ul>
      {weekDays}
    </ul>
  )
}