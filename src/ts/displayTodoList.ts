import { createTodoHTML } from "./createTodoHTML";
import { toggleTodoCompletion } from "./todoButtonEventListeners";
import { TodoListContract } from "./todoList.types";

/**
 * Renders all todos from the provided list instance into the DOM.
 *
 * Efficiently creates list items from the provided todo list instance
 * and appends them to the existing <ul> element using a document fragment.
 *
 * Should be called once during initial page load.
 *
 * @param todoList - The active todo list instance responsible for state management and persistence.
 */
export function displayTodoList(myTodos: TodoListContract) {
  const ul = document.querySelector("ul")!;
  const fragment = document.createDocumentFragment();
  myTodos.getTodos().forEach(({ task, completed, priority }, index) => {
    const todoLi = createTodoHTML({ task, completed, priority });
    todoLi.dataset.index = String(index);
    toggleTodoCompletion(myTodos, todoLi);
    fragment.appendChild(todoLi);
  });

  ul.appendChild(fragment);
}
