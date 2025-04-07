# Todo App

The most generic project in JS history.

---

## 🧱 TypeScript Structure

📦 `ts/`

| File                          | Responsibility |
|------------------------------|----------------|
| `main.ts`                    | App entry point – initializes state and hooks up form and UI rendering |
| `todo.types.ts`              | Interface representing a single todo item |
| `todoList.types.ts`          | Interface defining the structure and behavior of a todo list |
| `todoList.ts`                | Class implementing the `TodoListContract` – handles list state and persistence |
| `displayTodoList.ts`         | Renders all todos into the DOM using a document fragment |
| `createTodoHTML.ts`          | Pure DOM factory that returns a `<li>` element for a todo |
| `todoButtonEventListeners.ts`| Wires up completion toggle logic for todo buttons |
| `todoForm.ts`                | Handles todo form submission and validation |

---

## 📱 How the Core of the App Works

Everything revolves around a `TodoList` instance, created after the DOM content has loaded.

### 🧠 State

The `TodoList` instance manages state via one property and several methods:

```ts
class TodoList implements TodoListContract {
  constructor(public todos: Array<Todo> = []) {}

  addTodo(task: string, priority: number): boolean {
    if (!(task.length > 0)) return false;
    if (!(priority >= 1 && priority <= 3)) return false;
    const todo: Todo = { task, completed: false, priority };
    this.todos.push(todo);
    return true;
  }

  toggleTodoCompleted(todoIndex: number): void {
    const todo = this.todos[todoIndex];
    if (!todo) throw new Error(`Invalid todo index: ${todoIndex}`);
    todo.completed = !todo.completed;
  }

  getTodos(): Array<Todo> {
    return this.todos;
  }

  // ...
}
```

The todos array holds the current list.
The methods allow you to add a new todo, retrieve the list, and toggle a todo’s completion state.

Yes, I renamed the original `markTodoCompleted()` method to `toggleTodoCompleted()`.
Why? Because I wanted the user to be able to revert a completed todo in case they accidentally marked something as done when it wasn’t.

Also, sidenote: `getTodos()` is technically redundant since todos is already public, but I left it in because the assignment required me to define this method.

I couldn't make todos private either, since the interface didn't allow it — you can't declare private properties in interfaces.

A potential workaround would be to omit todos from the interface and declare it as private in the class, then expose it only via `getTodos()`. But that would’ve gone against the assignment’s requirement to define todos in the interface.

So yeah my hands were tied, but at least I learned something from it, so that’s cool.

### 💾 Persistence

In addition to managing in-memory state, the TodoList instance handles persistence through localStorage, keeping your todos between browser sessions:

```ts
class TodoList implements TodoListContract {
  private static readonly key = "todos";

  saveToLocalStorage(): void {
    const json = JSON.stringify(this.todos);
    localStorage.setItem(TodoList.key, json);
  }

  loadFromLocalStorage(): void {
    const json = localStorage.getItem(TodoList.key);
    this.todos = !json ? [] : (JSON.parse(json) as Array<Todo>);
  }
}
```

It uses a private static readonly key. Here's why:

    private → to encapsulate it within the class

    static → so it's shared across all instances

    readonly → so it can't be reassigned after declaration

One small but intentional design decision: in functions like `displayTodoList`, I type the parameter using the interface `TodoListContract` instead of the concrete `TodoList` class.

I did this because if I ever create another class that implements the same interface, I can reuse the same functions without changing their type signatures or duplicating logic across multiple class-specific functions.

---

There's more to the app, of course, such as event listeners, DOM rendering, form logic, etc.
But I believe the real goal of the assignment was to demonstrate a solid grasp of object-oriented programming in TypeScript, which I’ve aimed to show here.
