import { useState, useEffect } from "react";
import axios from "axios";
import { updateSpots } from "Helpers/updateSpots";


export function useApplicationData() {               // Initialize state object
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([                                        // Get requests to to assign data to state
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")])

      .then((all) => {
        setState(prev => ({
          ...prev, days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }))
      })
      .catch(err => console.log(err))
  }, [])


  const setDay = day => setState({ ...state, day });  // Set day function to udpate selected day


  function bookInterview(id, interview) {             // Book interview request
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = updateSpots(state, appointments)
  
    return axios.put(`/api/appointments/${id}`, { interview })
    .then(res => {
      setState({ ...state, appointments, days })

      return res
    })
    .catch(err => console.log(err))
  }



  function cancelInterview(id) {                     // Delete interview request
    const appointment = {
      ...state.appointments[id],
      interview: null
    }

    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    const days = updateSpots(state, appointments)

    return axios.delete(`/api/appointments/${id}`)
    .then(res => {
      setState({ ...state, appointments, days })
      return res
    })
    .catch(err => console.log(err))
  }



  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}