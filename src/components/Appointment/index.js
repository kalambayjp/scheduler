import React from "react";
import "./styles.scss";
import Header from "./Header";

export default function Appointment(props) {
  const {time} = props;
  const text = time ? `Appointment at ${time}` : `No Appointments`;
  return (
    <article className="appointment">
      {text}
    </article>
  )
}