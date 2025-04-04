import { ITodo } from "./iTodo";

/**
 * Interface defining the structure and behavior of a Todo list.
 */
export interface ITodoList {
  /** The current list of todos */
  todos: Array<ITodo>;
  /**
   * Adds a new todo to the list.
   * @param task - The task description (must be non-empty)
   * @param priority - Priority level (1–3) (1 = highest, 3 = lowest)
   * @returns true if added successfully, false if input is invalid
   */
  addTodo(task: string, priority: number): boolean;
  /**
   * Marks a todo as completed by its index in the list.
   * @param todoIndex - Index of the todo to mark as completed
   * @throws if the given todoIndex does not point to an element inside the current list of todos
   */
  markTodoCompleted(todoIndex: number): void;
  /** Returns the current list of todos */
  getTodos(): Array<ITodo>;
  /** Saves the todo list to localStorage */
  saveToLocalStorage(): void;
  /** Loads the todo list from localStorage */
  loadFromLocalStorage(): void;
}
