import "@styles/style.scss";
import { TodoList } from "./todoList";
import { displayTodoList } from "./displayTodoList";
import { setupTodoForm } from "./todoForm";

document.addEventListener("DOMContentLoaded", () => {
  const myTodos = new TodoList();
  myTodos.loadFromLocalStorage();
  displayTodoList(myTodos.getTodos());
  setupTodoForm(myTodos);
});
