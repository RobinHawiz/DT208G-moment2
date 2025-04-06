import { createTodoHTML } from "./createTodoHTML";
import { ITodo } from "./iTodo";
import { ITodoList } from "./iTodoList";

/**
 * Attaches submit handler to the todo form and wires it to the todo list logic.
 *
 * @param myTodos - The active todo list instance responsible for state management and persistence.
 */
export function setupTodoForm(myTodos: ITodoList): void {
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
function handleTodoSubmit(e: SubmitEvent, myTodos: ITodoList) {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const todo: ITodo = {
    task: formData.get("todo-desc") as string,
    completed: false,
    priority: Number(formData.get("todo-prio")),
  };
  myTodos.addTodo(todo.task, todo.priority);
  myTodos.saveToLocalStorage();
  displayTodo(todo);
}

/**
 * Renders a todo item and appends it to the list in the DOM.
 *
 * @param todo - The todo object to display
 */
function displayTodo(todo: ITodo) {
  const ul: HTMLUListElement = document.querySelector("ul")!;
  const li: HTMLLIElement = createTodoHTML(todo);

  ul.appendChild(li);
}
