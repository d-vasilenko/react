import { tasks } from "./data.js";

const render = () => {
  const rootEl = document.getElementById('root');
  const titleEl = document.createElement('h1');
  titleEl.append('Список дел')
  rootEl.append(titleEl);

  const tasksEl = document.createElement('ul');
  

  tasks.forEach((task) => {
    const taskEl = document.createElement('li');
    const taskTitleEl = document.createElement('div');
    const taskStatusEl = document.createElement('input');
    taskTitleEl.append(task.title);
    taskStatusEl.checked = task.isDone;
    taskStatusEl.type = 'checkbox';
    taskEl.append(taskTitleEl);
    taskEl.append(taskStatusEl);
    tasksEl.append(taskEl);
  })

  rootEl.append(tasksEl);

}


render()