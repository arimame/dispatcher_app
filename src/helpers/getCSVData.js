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
      for(let i = 1; i < dailyData.length; i++) {
        let bidailyData  = [];
        //create a new array for every dayCount divisible by 2
        //each array includes selected day and 1 days prior (total 2 days)
        if (dailyData[i][0] % 2 === 0) {
          //push added day count
          bidailyData.push("Day " + dailyData[i - 1][0] + " - " + dailyData[i][0]);
          //push added pickup
          bidailyData.push(dailyData[i - 1][1] + dailyData[i][1]);
          //push added dropoff
          bidailyData.push(dailyData[i - 1][2] + dailyData[i][2]);
          //push added other
          bidailyData.push(dailyData[i - 1][3] + dailyData[i][3]);
          data.push(bidailyData);
        }
      }
      break;
    case "4":
      data.push(["Timeframe", "Pickup", "Dropoff", "Other"]);
      dailyData = getDataByDay(calendar);
      for(let i = 1; i < dailyData.length; i++) {
        let fourDayData  = [];
        //create a new array for every dayCount divisible by 4
        //each array includes selected day and 3 days prior (total 4 days)
        if (dailyData[i][0] % 4 === 0) {
          //push added day count
          fourDayData.push("Day " + dailyData[i - 3][0] + " - " + dailyData[i][0]);
          //push added pickup
          fourDayData.push(dailyData[i - 3][1] + dailyData[i - 2][1] + dailyData[i - 1][1] + dailyData[i][1]);
          //push added dropoff
          fourDayData.push(dailyData[i - 3][2] + dailyData[i - 2][2] + dailyData[i - 1][2] + dailyData[i][2]);
          //push added other
          fourDayData.push(dailyData[i - 3][3] + dailyData[i - 2][3] + dailyData[i - 1][3] + dailyData[i][3]);
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
      for(let i = 1; i < weeklyData.length; i++) {
        let biweeklyData = [];
        //create a new array for every weekCount divisible by 2
        //each array includes selected week and 1 week prior (total 2 weeks)
        if (weeklyData[i][0] % 2 === 0) {
          //push added week count
          biweeklyData.push("Week " + weeklyData[i - 1][0] + " - " + weeklyData[i][0]);
          //push added pickup
          biweeklyData.push(weeklyData[i - 1][1] + weeklyData[i][1]);
          //push added dropoff
          biweeklyData.push(weeklyData[i - 1][2] + weeklyData[i][2]);
          //push added other
          biweeklyData.push(weeklyData[i - 1][3] + weeklyData[i][3]);
          data.push(biweeklyData);
        }
      }
      break;
    case "28":
      data.push(["Timeframe", "Pickup", "Dropoff", "Other"]);
      weeklyData = getDataByWeek(calendar, report);
      for(let i = 1; i < weeklyData.length; i++) {
        let monthlyData = [];
        //create a new array for every weekCount divisible by 4
        //each array includes selected week and 3 week prior (total 4 weeks)
        if (weeklyData[i][0] % 4 === 0) {
          //push added week count
          monthlyData.push("Week " + weeklyData[i - 3][0] + " - " + weeklyData[i][0]);
          //push added pickup
          monthlyData.push(weeklyData[i - 3][1] + weeklyData[i - 2][1] + weeklyData[i - 1][1] + weeklyData[i][1]);
          //push added dropoff
          monthlyData.push(weeklyData[i - 3][2] + weeklyData[i - 2][2] + weeklyData[i - 1][2] + weeklyData[i][2]);
          //push added other
          monthlyData.push(weeklyData[i - 3][3] + weeklyData[i - 2][3] + weeklyData[i - 1][3] + weeklyData[i][3]);
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
