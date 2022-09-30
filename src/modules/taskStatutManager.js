export default class TaskStatutManager {
  constructor(taskList){
    this.tasklist = taskList;
  }
  /*hideComponent(elmntsParam) {
    const test = elmntsParam.classList;
    if (!test.contains('hidden_item')) {
      test.toggle('hidden_item');
    }
  }
  displayComponent(elmnts) {
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
  }*/
  displayLineThroughComponent(elmntsParam) {
    const test = elmntsParam.classList;
    if (!test.contains('line_through')) {
      test.toggle('line_through');
    }
  }
  removeLineThroughComponent(elmnts) {
    if (elmnts.isArray) {
      elmnts.forEach((elmnt) => {
        const test = elmnt.classList;
        if (test.contains('line_through')) {
          test.remove('line_through');
        }
      });
    } else {
      const test = elmnts.classList;
      if (test.contains('line_through')) {
        test.remove('line_through');
      }
    }
  }
  completeTask(index) {
    this.hideComponent(document.querySelector(`.uncomplete${index}`));
    displayComponent(document.querySelector(`.complete${index}`));
    hideComponent(document.querySelector(`.details${index}`));
    displayComponent(document.querySelector(`.delete${index}`));
    displayLineThroughComponent(document.querySelector(`.input${index}`));
    tasklist.localData[index - 1].setCompleted(true);
  }

  uncompleteTask(index) {
    this.hideComponent(document.querySelector(`.complete${index}`));
    this.displayComponent(document.querySelector(`.uncomplete${index}`));
    this.hideComponent(document.querySelector(`.delete${index}`));
    this.displayComponent(document.querySelector(`.details${index}`));
    this.removeLineThroughComponent(document.querySelector(`.input${index}`));
    this.tasklist.localData[index - 1].setCompleted(false);
  }

  clearCompletedTasks() {
    this.tasklist.clearCompletedTasks();
    this.refreshTodoList();
  }

}