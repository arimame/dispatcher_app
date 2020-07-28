function getDataByDay(calendar, report) {
  const data = [];
  //loop through each week
  for(const week in calendar) {
    //loop through each day
    for(const day in calendar[week]) {
      //take the day number which is 1-7
      //turn it into a number that represents the day of the year
      let dayCount = Number(day) + (7 * (Number(week) - 1));
      let pickup = 0;
      let dropoff = 0;
      let other = 0;
      //loop throuh each task of a day
      for(const task of calendar[week][day].tasks) {
        //add to pickup count
        if(task.type === "pickup") {
          pickup += 1;
        }
        //add to dropoff count
        if(task.type === "dropoff") {
          dropoff += 1;
        }
        //add to other count
        if(task.type === "other") {
          other += 1;
        }
      }
      //push calucalted day data to the data array
      data.push([dayCount, pickup, dropoff, other]);
    }
  }
  return data;
}

function getDataByWeek(calendar, report) {
  const data = [];
  //loop through each week
  for(const week in calendar) {
    //number each week if the report type is 7 days add "Week" to string
    // else return just the number
    const weekCount = (report === "7") ? "Week " + week : week;
    let pickup = 0;
    let dropoff = 0;
    let other = 0;
    //loop through each day
    for(const day in calendar[week]) {
      //loop through each day's tasks
      for(const task of calendar[week][day].tasks) {
        //add to pickup count
        if(task.type === "pickup") {
          pickup += 1;
        }
        //add to dropoff count
        if(task.type === "dropoff") {
          dropoff += 1;
        }
        //add to other count
        if(task.type === "other") {
          other += 1;
        }
      }
    }
    // push count totals for week to data array
    data.push([weekCount, pickup, dropoff, other]);
  }
  return data;
}

function getCSVData(calendar, report) {
  let data = [];
  let weeklyData = [];
  let dailyData  = [];

  switch(report) {
    case "2":
      data.push(["Timeframe", "Pickup", "Dropoff", "Other"]);
      dailyData = getDataByDay(calendar);
      for(let day = 1; day < dailyData.length; day++) {
        let bidailyData  = [];
        //create a new array for every dayCount divisible by 2
        //each array includes selected day and 1 day prior (total 2 days)
        if (dailyData[day][0] % 2 === 0) {
          for(let dataItem = 0; dataItem < dailyData[day].length; dataItem++) {
            if(dataItem === 0) {
              //append dayCount
              bidailyData.push("Day " + dailyData[day - 1][dataItem] + " - " + dailyData[day][dataItem]);
            } else {
              // add together all other dataItems
              bidailyData.push(dailyData[day - 1][dataItem] + dailyData[day][dataItem]);
            }
          }
          data.push(bidailyData);
        }
      }
      break;
    case "4":
      data.push(["Timeframe", "Pickup", "Dropoff", "Other"]);
      dailyData = getDataByDay(calendar);
      for(let day = 1; day < dailyData.length; day++) {
        let fourDayData  = [];
        //create a new array for every dayCount divisible by 4
        //each array includes selected day and 3 days prior (total 4 days)
        if (dailyData[day][0] % 4 === 0) {
          //push added day count
            for(let dataItem = 0; dataItem < dailyData[day].length; dataItem++) {
              if(dataItem === 0) {
                fourDayData.push("Day " + dailyData[day - 3][dataItem] + " - " + dailyData[day][dataItem]);
              } else {
                fourDayData.push(dailyData[day - 3][dataItem] + dailyData[day - 2][dataItem] + dailyData[day - 1][dataItem] + dailyData[day][dataItem]);
              }
            }
          data.push(fourDayData);
        }
      }
      break;
    case "7":
      data = getDataByWeek(calendar, report);
      data.unshift(["Timeframe", "Pickup", "Dropoff", "Other"]);
      break;
    case "14":
      data.push(["Timeframe", "Pickup", "Dropoff", "Other"]);
      weeklyData = getDataByWeek(calendar, report);
      for(let week = 1; week < weeklyData.length; week++) {
        let biweeklyData = [];
        //create a new array for every weekCount divisible by 2
        //each array includes selected week and 1 week prior (total 2 weeks)
        if (weeklyData[week][0] % 2 === 0) {
          for(let dataItem = 0; dataItem < weeklyData[week].length; dataItem++) {
            if(dataItem === 0) {
              biweeklyData.push("Week " + weeklyData[week - 1][dataItem] + " - " + weeklyData[week][dataItem]);
            } else {
              biweeklyData.push(weeklyData[week - 1][dataItem] + weeklyData[week][dataItem]);
            }
          }
          data.push(biweeklyData);
        }
      }
      break;
    case "28":
      data.push(["Timeframe", "Pickup", "Dropoff", "Other"]);
      weeklyData = getDataByWeek(calendar, report);
      for(let week = 1; week < weeklyData.length; week++) {
        let monthlyData = [];
        //create a new array for every weekCount divisible by 4
        //each array includes selected week and 3 week prior (total 4 weeks)
        if(weeklyData[week][0] % 4 === 0) {
          for(let dataItem = 0; dataItem < weeklyData[week].length; dataItem++) {
            if(dataItem === 0) {
              monthlyData.push("Week " + weeklyData[week - 3][dataItem] + " - " + weeklyData[week][dataItem]);
            } else {
              monthlyData.push(weeklyData[week - 3][dataItem] + weeklyData[week - 2][dataItem] + weeklyData[week - 1][dataItem] + weeklyData[week][dataItem]);
            }
          }
          data.push(monthlyData);
        }
      }
      break;
    default:
      console.log("error");
  }
  return data;
}


export default getCSVData;
