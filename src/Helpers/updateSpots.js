const updateSpots = function (state, appointments, id) {
  const dayObj = state.days.find(day => day.name === state.day);
  const spots = getSpotsForDay(dayObj, appointments);
  const day = {...dayObj, spots};
  const updatedDays = state.days.map(d => d.name === state.day ? day : d);

  return updatedDays;
}

const getSpotsForDay = function (day, appointments) {
  let spots = 0;

  for (const id of day.appointments) {
    const appointment = appointments[id];
    if (!appointment.interview) {
      spots++;
    }
  }

  return spots;
}

export {
  updateSpots,
  getSpotsForDay
}