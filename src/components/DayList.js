import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const {day, days, setDay} = props;
  const weekDays = days.map((singleDay, i) => <DayListItem key={i} {...singleDay} selected={singleDay.name === day} setDay={setDay} />)

  return (
    <ul>
      {weekDays}
    </ul>
  )
}