import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { day, days, onChange } = props;
  const weekDays = days.map(
    (singleDay, i) =>
      <DayListItem key={i}
        {...singleDay}
        selected={singleDay.name === day}
        onChange={onChange}
      />)

  return (
    <ul>
      {weekDays}
    </ul>
  )
}