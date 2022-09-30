import './style.css';
import TaskList from './modules/tasklist.js';

const taskinput = document.querySelector('.add_todo_input');
const listContainer = document.querySelector('.todolist');
const todoaddbutton = document.querySelector('.todo_add_icon');
const refreshIcon = document.querySelector('.refresh_div');
const tasklist = new TaskList();

function generateTaskList() {
  listContainer.innerHTML = tasklist.generateTaskList();
}
function refreshTodoList() {
  listContainer.innerHTML = '';
  generateTaskList();
}
function add() {
  if (taskinput.value !== '') {
    tasklist.addTask(taskinput.value);
    generateTaskList();
    taskinput.value = '';
  }
}
function hideComponent(elmntsParam) {
  const test = elmntsParam.classList;
  if (!test.contains('hidden_item')) {
    test.toggle('hidden_item');
  }
}

function displayComponent(elmnts) {
  if (elmnts.isArray) {
    elmnts.forEach((elmnt) => {
      const test = elmnt.classList;
      if (test.contains('hidden_item')) {
        test.remove('hidden_item');
      }
    });
  } else {
    const test = elmnts.classList;
    if (test.contains('hidden_item')) {
      test.remove('hidden_item');
    }
  }
}

function focusInput(index) {
  hideComponent(document.querySelector(`.details${index}`));
  displayComponent(document.querySelector(`.delete${index}`));
}

function lifocusout(index) {
  hideComponent(document.querySelector(`.delete${index}`));
  displayComponent(document.querySelector(`.details${index}`));
}

function taskUpdate(index) {
  tasklist.localData[index - 1].description = document.querySelector(`.input${index}`).value;
  tasklist.refreshIndex();
}

function removeTask(index) {
  tasklist.removeItem(index - 1);
  refreshTodoList();
}
function clearCompletedTasks() {
  tasklist.clearCompletedTasks();
  refreshTodoList();
}
function displayDeleteButton(index) {
  hideComponent(document.querySelector(`.details${index}`));
  displayComponent(document.querySelector(`.delete${index}`));
}
function hideDeleteButton(index) {
  hideComponent(document.querySelector(`.details${index}`));
  displayComponent(document.querySelector(`.delete${index}`));
}
document.hideDeleteButton = hideDeleteButton;
document.displayDeleteButton = displayDeleteButton;
document.completeTask = completeTask;
document.uncompleteTask = uncompleteTask;
document.focusInput = focusInput;
document.lifocusout = lifocusout;
document.taskUpdate = taskUpdate;
document.removeTask = removeTask;
document.displayLineThroughComponent = displayLineThroughComponent;
document.removeLineThroughComponent = removeLineThroughComponent;
document.addEventListener('DOMContentLoaded', refreshTodoList);
document.querySelector('.todo_clear_all_completed').addEventListener('click', clearCompletedTasks);
todoaddbutton.addEventListener('click', add);
refreshIcon.addEventListener('click', refreshTodoList);