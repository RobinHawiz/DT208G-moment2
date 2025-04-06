import { Todo } from "./todo.types";

/**
 * Creates and returns a <li> element representing a single todo item.
 *
 * The element includes:
 * - Task description
 * - Priority value
 * - A completion button with data attributes
 *
 * This function serves as a pure DOM factory with no side effects beyond element creation.
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
  completeElemBtn.setAttribute("data-completed", `${completed}`);

  const li = document.createElement("li");
  li.appendChild(priorityElemP);
  li.appendChild(taskElemP);
  li.appendChild(completeElemBtn);

  return li;
}
