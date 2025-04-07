import { Todo } from "./todo.types";

/**
 * Creates and returns a <li> element representing a single todo item.
 *
 * The element includes:
 * - A completion data attribute
 * - Task description
 * - Priority value
 * - A completion button with a click listener that toggles the `.completed` class
 *   and updates the `data-completed` attribute accordingly.
 *
 * The returned element is interactive, but not inserted into the DOM by this function.
 *
 * @param todo - The todo item to render
 * @returns A fully constructed and interactive <li> element representing the todo
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
  li.setAttribute("data-completed", completed.toString());
  li.appendChild(priorityElemP);
  li.appendChild(taskElemP);
  li.appendChild(completeElemBtn);

  completeElemBtn.addEventListener("click", () => {
    const isComplete = li.dataset.completed === "true";
    li.dataset.completed = (!isComplete).toString();
    li.classList.toggle("completed");
  });

  return li;
}
