"use client";

import React, { useState } from "react";

interface TodoFormProps {
  onAddTodo: (text: string, category: string) => void;
}

export default function TodoForm({ onAddTodo }: TodoFormProps) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Planting");

  const gardeningCategories = [
    "Planting",
    "Watering",
    "Pruning",
    "Weeding",
    "Fertilizing",
    "Pest Control",
    "Cleanup",
    "Tool Maintenance",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim()) {
      onAddTodo(text, category);
      setText("");
      // Keep the category selected for multiple entries
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="todo-text"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Garden Task
          </label>
          <input
            id="todo-text"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a spring gardening task..."
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="todo-category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <select
            id="todo-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          >
            {gardeningCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}
