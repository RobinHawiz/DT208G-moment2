import { createTodoHTML } from "./createTodoHTML";
import { Todo } from "./todo.types";
import { toggleTodoCompletion } from "./todoButtonEventListeners";
import { TodoListContract } from "./todoList.types";

/**
 * Attaches submit handler to the todo form and wires it to the todo list logic.
 *
 * @param myTodos - The active todo list instance responsible for state management and persistence.
 */
export function setupTodoForm(myTodos: TodoListContract): void {
  const form: HTMLFormElement = document.querySelector("form")!;
  form.addEventListener("submit", (e) => handleTodoSubmit(e, myTodos));
}

/**
 * Handles form submission:
 * - Extracts form input values
 * - Adds the todo to the list
 * - Saves to local storage
 * - Renders the new todo in the DOM
 *
 * @param e - The form submission event
 * @param myTodos - The todo list instance to operate on
 */
function handleTodoSubmit(e: SubmitEvent, myTodos: TodoListContract) {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const todo: Todo = {
    task: formData.get("todo-desc") as string,
    completed: false,
    priority: Number(formData.get("todo-prio")),
  };
  const todoIsValid = myTodos.addTodo(todo.task, todo.priority);
  if (todoIsValid) {
    myTodos.saveToLocalStorage();
    displayTodo(myTodos, todo);
  } else {
    alert("The submitted todo was invalid. Please try again (or don't)");
  }
}

/**
 * Renders a todo item and appends it to the DOM.
 *
 * @param myTodos - The active todo list instance responsible for state management and persistence.
 * @param todo - The todo object to display
 */
function displayTodo(myTodos: TodoListContract, todo: Todo) {
  const ul: HTMLUListElement = document.querySelector("ul")!;
  const li: HTMLLIElement = createTodoHTML(todo);
  const index = myTodos.getTodos().length - 1;
  li.dataset.index = String(index);
  toggleTodoCompletion(myTodos, li);

  ul.appendChild(li);
}
