"use client";
import { useEffect, useState } from "react";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import { Task } from "../../type/task";

const API = "http://localhost:4000/api/tasks";
// update 
export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data: Task[]) => {
        console.log("📦 Loaded tasks:");
        data.forEach((task) =>
          console.log(`🆔 ${task._id} | ✅ done: ${task.done}`)
        );
        setTasks(data);
      });
  }, []);    

  const addTask = async (title: string) => {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({ title }),
    });
    const newTask = await res.json();
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleDone = async (task: Task) => {
    await fetch(`${API}/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done: !task.done }),
    });
    setTasks((prev) =>
      prev.map((t) => (t._id === task._id ? { ...t, done: !task.done } : t))
    );
  };

  const deleteTask = async (id: string) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    setTasks((prev) => prev.filter((t) => t._id !== id));
  };

  const updateTask = async (task: Task, newTitle: string) => {
  await fetch(`${API}/${task._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: newTitle }),
  });

  setTasks((prev) =>
    prev.map((t) =>
      t._id === task._id ? { ...t, title: newTitle } : t
    )
  );
};


  return (
    <main className="max-w-xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">📝 Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleDone} onDelete={deleteTask} onUpdate={updateTask} />
    </main>
  );
}
