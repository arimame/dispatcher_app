# Dispatcher Scheduling App

Do you have a fleet of drivers whose time needs to be carefully managed in order to maintain productivity? Do you ever ask yourself questions like, "am I equitably distributing the tasks I have"?

If so, this simple scheduling app is for you. Not only can you make and delete appointments, keeping track of a full year of data one week at a time, but you can also view that data in easy-to-compare pieces and export all of your drivers' data into Excel friendly file formats for easy implementation elsewhere in your busy business.

## Features
- Users can view a weekly calendar for 3 different drivers.
- Users can create new tasks for a specified driver.
- Users can edit existing tasks and update task types, times, locations, and descriptions.
- Users can automatically overwrite an old task with a new task, if there is a time conflict.
- Users can delete tasks.
- Users can download CSV files outlining a specified driver's tasks for a chosen time frame.

## Getting Started

- `git clone` this repo to your local machine

In the project directory:
- `npm install` to install all dependencies
- `npm start` to run the app
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Dependencies
- @material-ui/core v.4.11.0
- @material-ui/icons v.4.9.1
- bootstrap v.4.5.0
- react-bootstrap v.1.3.0
- lodash v.4.17.1
- moment v.2.27.0
- moment-range v.4.0.2
- react v.16.13.1
- react-csv v.2.0.3
- react-dom v.16.13.1
- react-moment v.0.9.7
- react-scripts v.3.4.1
- uuid v.8.2.0

## Final Product

!["Screenshot of Dispatcher Scheduling App Calendar"](public/screenshots/ScreenShotCalendar.png)

!["Screenshot of Dispatcher Scheduling App Add Task"](public/screenshots/ScreenShotAddTask.png)
