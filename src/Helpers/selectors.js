export function getAppointmentsForDay(state, day) {
  const selectedDaysAppointments =[]
  let selectedDay;
  
  for (const stateDay of state.days) {
    if (stateDay.name === day) {
      selectedDay = stateDay
    }
  }

  if (!selectedDay) {
    return selectedDaysAppointments;
  }
  
  for (const appointment in state.appointments) {
    if (selectedDay.appointments.includes(state.appointments[appointment].id)) {
      selectedDaysAppointments.push(state.appointments[appointment])
    }
  }
  
  return selectedDaysAppointments;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null
  }
  const student = interview.student;
  const interviewerId = interview.interviewer
  let result = {
    student: student,
    interviewer: {}
  };

  for (const obj in state.interviewers) {
    if (state.interviewers[obj].id === interviewerId) {
      result.interviewer = state.interviewers[obj]
    }
  }
  return result;
}

export function getInterviewersForDay(state, day) {
  let selectedDay;
  for (const stateDay of state.days) {
    if (stateDay.name === day) {
      selectedDay = stateDay
    }
  }
  if (!selectedDay) {
    return {};
  }

  const selectedDaysInterviewers = selectedDay.interviewers
  return selectedDaysInterviewers;
}