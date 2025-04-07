import { Todo } from "./todo.types";

/**
 * Interface defining the structure and behavior of a Todo list.
 */
export interface TodoListContract {
  /** The current list of todos */
  todos: Array<Todo>;
  /**
   * Adds a new todo to the list.
   * @param task - The task description (must be non-empty)
   * @param priority - Priority level (1–3) (1 = highest, 3 = lowest)
   * @returns true if added successfully, false if input is invalid
   */
  addTodo(task: string, priority: number): boolean;
  /**
   * Toggles a todo as completed or uncompleted by its index in the list.
   * @param todoIndex - Index of the todo to mark as completed/uncompleted
   * @throws if the given todoIndex does not point to an element inside the current list of todos
   */
  toggleTodoCompleted(todoIndex: number): void;
  /** Returns the current list of todos */
  getTodos(): Array<Todo>;
  /** Saves the todo list to localStorage */
  saveToLocalStorage(): void;
  /** Loads the todo list from localStorage */
  loadFromLocalStorage(): void;
}
