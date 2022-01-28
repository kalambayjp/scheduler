function getAppointmentsForDay(state, day) {
  const result = [];
 
  const dayObj = state.days.find(d => d.name === day)
  if (!dayObj) {
    return result;
  }

  for (const id of dayObj.appointments) {
    const appointment = state.appointments[id];
    result.push(appointment)
  }

  return result;
}


function getInterview(state, interview) {
  if (!interview) {
    return null
  }

  const id = interview.interviewer;
  const interviewer = state.interviewers[id];
  const result = { ...interview, interviewer: interviewer }

  return result;
}


function getInterviewersForDay(state, day) {
  const result = [];
  const dayObj = state.days.find(d => d.name === day)

  if (!dayObj) {
    return result;
  }

  for (const id of dayObj.interviewers) {
    const interviewer = state.interviewers[id];
    result.push(interviewer)
  }

  return result;
}



export {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay
}