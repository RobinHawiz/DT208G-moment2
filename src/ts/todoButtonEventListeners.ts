import { TodoListContract } from "./todoList.types";
/**
 * Attaches a click event listener to todo's completion button.
 *
 * on click:
 * - Toggles the todo’s completed state in the list
 * - Saves the updated list to local storage
 * - Updates the UI by toggling the `.completed` class on the <li>
 *
 * @param myTodos - The active todo list instance managing state and persistence
 * @param todoLi - The <li> element representing the todo
 * @throws If the index in `todoLi.dataset.index` does not match a valid todo in the list
 */
export function toggleTodoCompletion(
  myTodos: TodoListContract,
  todoLi: HTMLLIElement
) {
  const completeElemBtn: HTMLButtonElement = todoLi.querySelector("#complete")!;
  completeElemBtn.addEventListener("click", () => {
    const todoIndex = Number(todoLi.dataset.index);
    myTodos.toggleTodoCompleted(todoIndex);
    myTodos.saveToLocalStorage();
    todoLi.classList.toggle("completed");
  });
}
