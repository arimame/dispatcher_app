
function createEmptyCalendar() {
  const emptyCalendarObject = {};
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  for(let week = 1; week <= 52; week++) {
    emptyCalendarObject[week] = {};
    for(let day = 0; day <= days.length -1; day++) {
        var emptyDayObject = days[day];
        emptyCalendarObject[week][emptyDayObject] = {
          tasks: []
        }
    }
  }
  return emptyCalendarObject;
}

export default createEmptyCalendar;
