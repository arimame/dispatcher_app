import Moment from 'moment';
import { extendMoment } from 'moment-range';

function conflictChecker(weekData, day, task) {
  let overlappingTasks = [];
  const moment = extendMoment(Moment);
  weekData[day].tasks.forEach((item) => {
    const range1 = moment.range(moment(task.start, 'HH:mm'), moment(task.end, 'HH:mm'));
    const range2 = moment.range(moment(item.start, 'HH:mm'), moment(item.end, 'HH:mm'));
    if(range1.overlaps(range2) && item.id !== task.id) {
      overlappingTasks.push(item.id);
    }
  });
  return overlappingTasks;
}

export default conflictChecker;
