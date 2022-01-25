import React, { useState } from "react";
import "components/Application.scss";
import DayList from "./DayList";
import "./Appointment"
import Appointment from "./Appointment";
import Axios from "axios";
import { useEffect } from "react";
import { getAppointmentsForDay } from "Helpers/selectors";
import { getInterviewersForDay } from "Helpers/selectors";


export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  const dailyAppointments = getAppointmentsForDay(state, state.day)
  const daysInterviewers = getInterviewersForDay(state, state.day)
  const setDay = day => setState({ ...state, day });
  const appointments = dailyAppointments.map((appointment) => <Appointment key={appointment.id} {...appointment} {...state.interviewers} {...daysInterviewers}/>)

  useEffect(() => {
    Promise.all([
      Axios.get("/api/days"),
      Axios.get("/api/appointments"),
      Axios.get("/api/interviewers")])
      .then((all) =>
        setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data })))


  }, [])
  
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointments}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
