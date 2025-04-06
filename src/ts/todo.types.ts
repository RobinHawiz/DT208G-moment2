/**
 * Interface representing a single Todo item.
 */
export interface Todo {
  /** The description of the task to be done */
  task: string;
  /** Whether the task has been completed */
  completed: boolean;
  /** Priority level of the task (1 = highest, 3 = lowest) */
  priority: number;
}
