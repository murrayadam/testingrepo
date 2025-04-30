import React, { useState, useEffect } from "react";
import TodoItem, { Todo } from "./TodoItem";
import TodoForm from "./TodoForm";

export default function GardeningTodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem("gardeningTodos");
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (e) {
        console.error("Error parsing saved todos:", e);
      }
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("gardeningTodos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string, category: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      category,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // Group todos by category
  const todosByCategory = filteredTodos.reduce(
    (groups, todo) => {
      const category = todo.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(todo);
      return groups;
    },
    {} as Record<string, Todo[]>,
  );

  // Get stats
  const completedCount = todos.filter((todo) => todo.completed).length;
  const totalCount = todos.length;

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-2xl font-bold text-green-700">
          Spring Gardening Tasks
        </h1>
        <div className="text-sm text-gray-500 mt-2">
          {completedCount} of {totalCount} tasks completed
        </div>
      </div>

      <TodoForm onAddTodo={addTodo} />

      <div className="mb-4 flex justify-center">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              filter === "all"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            } border border-gray-200`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-4 py-2 text-sm font-medium ${
              filter === "active"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            } border-t border-b border-gray-200`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              filter === "completed"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            } border border-gray-200`}
          >
            Completed
          </button>
        </div>
      </div>

      {Object.keys(todosByCategory).length === 0 ? (
        <div className="text-center py-6 text-gray-500">
          {filter === "all"
            ? "No gardening tasks yet. Add your first task above!"
            : filter === "active"
              ? "No active tasks. Time to add more or take a break!"
              : "No completed tasks. Get gardening!"}
        </div>
      ) : (
        Object.entries(todosByCategory).map(([category, todos]) => (
          <div key={category} className="mb-6">
            <h2 className="text-md font-semibold text-gray-700 mb-2 pb-1 border-b">
              {category} ({todos.length})
            </h2>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </div>
        ))
      )}

      {totalCount > 0 && (
        <div className="border-t pt-4 mt-6 flex justify-between text-sm text-gray-500">
          <span>{todos.filter((t) => !t.completed).length} tasks left</span>
          {completedCount > 0 && (
            <button
              onClick={() => setTodos(todos.filter((t) => !t.completed))}
              className="text-red-500 hover:text-red-700"
            >
              Clear completed
            </button>
          )}
        </div>
      )}
    </div>
  );
}
