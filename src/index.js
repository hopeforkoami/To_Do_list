import './style.css';
import Task from './modules/task.js';

const taskinput = document.querySelector('.add_todo_input');
const listContainer = document.querySelector('.todolist');
const todoaddbutton = document.querySelector('.todo_add_icon');
const refreshIcon = document.querySelector('.refresh_div');
const tasklist = [];
function generateTodoIndex() {
  let id = 1;
  if (tasklist.length > 0) {
    id = tasklist[tasklist.length - 1].index + 1;
  }
  return id;
}

function generateTaskList() {
  let content = '';
  tasklist.forEach((task) => {
    content += task.renderLi();
  });
  listContainer.innerHTML = content;
}
function refreshTodoList() {
  listContainer.innerHTML = '';
  generateTaskList();
}
function addTask() {
  if (taskinput.value !== '') {
    tasklist.push(new Task(taskinput.value, generateTodoIndex()));
    generateTaskList();
    taskinput.value = '';
  }
}
todoaddbutton.addEventListener('click', addTask);
refreshIcon.addEventListener('click', refreshTodoList);