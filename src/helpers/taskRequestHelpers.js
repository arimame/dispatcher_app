export const addTask = (tasks, newTask) => {
    const updatedTasks = [ ...tasks, newTask];
    return updatedTasks;
 };

export const updateTask = (tasks, updatedTask) => {
   tasks.forEach((task, i) => {
     if(task.id === updatedTask.id) {
       tasks[i] = updatedTask;
     }
   });
   return tasks;
 };

export const deleteTask = (tasks, taskToRemove) => {
   tasks.forEach((task, i) => {
     if(task.id === taskToRemove.id) {
       tasks.splice(i, 1);
     }
   });
   return tasks;
 };

export const overwriteTask = (tasks, newTask, tasksToRemove, type) => {
    tasksToRemove.forEach((taskToRemove) => {
     tasks.forEach((task, i) => {
       if(task.id === taskToRemove) {
         tasks.splice(i, 1);
       }
     });
   });

   if(type === "add") {
     tasks.push(newTask);
   }

   if(type === "update") {
     tasks.forEach((task, i) => {
       if(task.id === newTask.id) {
         tasks[i] = newTask;
       }
     });
   }
   return tasks;
  };
