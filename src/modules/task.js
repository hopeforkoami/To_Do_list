export default class Task {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }

  renderLi() {
    return `<li class="todo_details"><div class="statut_and_detail"><img src="./assets/todouncompleteicon.svg" alt="todo statut icon"> <span class="todo_description">${
      this.description}</span></div><img src="assets/detail_icon.svg" alt="action icon" class="doto_action"></li>`;
  }
}
