"use client";

import { useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const startEditing = (id: number, title: string) => {
    setIsEditing(true);
    setEditTaskId(id);
    setNewTask(title);
  };

  const updateTask = () => {
    if (editTaskId !== null && newTask.trim()) {
      setTasks(tasks.map(task =>
        task.id === editTaskId ? { ...task, title: newTask } : task
      ));
      setIsEditing(false);
      setEditTaskId(null);
      setNewTask("");
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-700">Todo List</h1>
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter a new task"
        />
        {isEditing ? (
          <button
            onClick={updateTask}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Update
          </button>
        ) : (
          <button
            onClick={addTask}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Add
          </button>
        )}
      </div>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer text-lg font-semibold ${
                task.completed
                  ? "line-through text-gray-500"
                  : "text-gray-800"
              }`}
            >
              {task.title}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => startEditing(task.id, task.title)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
