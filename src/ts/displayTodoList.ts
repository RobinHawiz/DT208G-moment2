import { createTodoHTML } from "./createTodoHTML";
import { ITodo } from "./iTodo";

/**
 * Renders a list of todos into the DOM.
 *
 * Efficiently creates list items from the provided todo data
 * and appends them to the existing <ul> element using a document fragment.
 *
 * Should be called once during initial page load.
 *
 * @param todoList - Array of todos to render
 */
export function displayTodoList(todoList: Array<ITodo>) {
  const ul = document.querySelector("ul")!;
  const fragment = document.createDocumentFragment();
  todoList.forEach(({ task, completed, priority }) => {
    const todoLi = createTodoHTML({ task, completed, priority });
    fragment.appendChild(todoLi);
  });

  ul.appendChild(fragment);
}
