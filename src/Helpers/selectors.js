export function getAppointmentsForDay(state, day) {
  const result = [];
  // find the day object
  const dayObj = state.days.find(d => d.name === day)
  if (!dayObj) {
    return result;
  }

  // iterate the days appointment ids
  for (const id of dayObj.appointments) {
    const appointment = state.appointments[id];
    result.push(appointment)
  }
  // add appointment object to 

  return result;
}



export function getInterview(state, interview) {
  if (!interview) {
    return null
  }

  const id = interview.interviewer;
  const interviewer = state.interviewers[id];
  const result = { ...interview, interviewer: interviewer }

  return result;
}

export function getInterviewersForDay(state, day) {
  const result = [];
  // find the day object
  const dayObj = state.days.find(d => d.name === day)
  if (!dayObj) {
    return result;
  }
  
  // iterate the days appointment ids
  for (const id of dayObj.interviewers) {
    const interviewer = state.interviewers[id];
    result.push(interviewer)
  }
  // add appointment object to 

  return result;
}