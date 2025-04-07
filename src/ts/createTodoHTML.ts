import { Todo } from "./todo.types";

/**
 * Creates and returns a <li> element representing a single todo item.
 *
 * The element includes:
 * - Task description
 * - Priority value
 * - A toggle completion button (logic wired externally)
 *
 * If the todo is marked as completed, the `.completed` class is applied.
 * This function is a pure DOM factory: it creates elements but does not attach event listeners or insert into the DOM.
 *
 * @param todo - The todo item to render
 * @returns A fully constructed <li> element representing the todo
 */
export function createTodoHTML({
  task,
  completed,
  priority,
}: Todo): HTMLLIElement {
  const priorityElemP = document.createElement("p");
  priorityElemP.innerText = `${priority}`;

  const taskElemP = document.createElement("p");
  taskElemP.innerText = task;

  const completeElemBtn = document.createElement("button");
  completeElemBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  completeElemBtn.setAttribute("id", "complete");

  const li = document.createElement("li");
  if (completed) li.classList.add("completed");
  li.appendChild(priorityElemP);
  li.appendChild(taskElemP);
  li.appendChild(completeElemBtn);

  return li;
}
