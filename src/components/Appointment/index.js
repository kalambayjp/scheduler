import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment(props) {
  const {time, interview} = props;
  const text = time ? `Appointment at ${time}` : `No Appointments`;
  return (
    <article className="appointment">
      {text}
      <Header time={time} />
      {interview ? <Show interview={interview} /> : <Empty />}
      
    </article>
  )
}