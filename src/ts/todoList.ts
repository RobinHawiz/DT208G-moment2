import { ITodo } from "./iTodo";
import { ITodoList } from "./iTodoList";

export class TodoList implements ITodoList {
  // Key used for storing/retrieving todos in localStorage
  private static readonly key = "todos";
  constructor(public todos: Array<ITodo> = []) {}
  addTodo(task: string, priority: number): boolean {
    if (!(task.length > 0)) return false;
    if (!(priority >= 1 && priority <= 3)) return false;
    const todo: ITodo = { task, completed: false, priority };
    this.todos.push(todo);
    return true;
  }
  markTodoCompleted(todoIndex: number): void {
    const todo: ITodo | undefined = this.todos[todoIndex];
    if (!todo) throw new Error("The given todoIndex gave no results.");
    this.todos[todoIndex].completed = true;
  }
  getTodos(): Array<ITodo> {
    return this.todos;
  }
  saveToLocalStorage(): void {
    const json = JSON.stringify(this.todos);
    localStorage.setItem(TodoList.key, json);
  }
  loadFromLocalStorage(): void {
    const json = localStorage.getItem(TodoList.key);
    this.todos = !json ? [] : (JSON.parse(json) as Array<ITodo>);
  }
}
