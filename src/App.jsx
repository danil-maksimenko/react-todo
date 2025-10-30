import { useEffect, useMemo, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskCard from "./components/TaskCard/TaskCard";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      return saved
        ? JSON.parse(saved)
        : [
            { id: 1, text: "To study React", isDone: true },
            { id: 2, text: "Make coffee", isDone: false },
          ];
    } catch {
      return [
        { id: 1, text: "To study React", isDone: true },
        { id: 2, text: "Make coffee", isDone: false },
      ];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch {}
  }, [tasks]);

  function addTask(value) {
    const title = value.trim();
    if (!title) return;

    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID?.() ?? Date.now(), text: title, isDone: false },
    ]);
  }

  function removeTask(id) {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  }

  const { todo, done } = useMemo(() => {
    return {
      todo: tasks.filter((task) => !task.isDone),
      done: tasks.filter((task) => task.isDone),
    };
  }, [tasks]);

  return (
    <div className="app">
      <TaskForm onAdd={addTask} />

      <TaskList
        title="Tasks to do"
        tasks={todo}
        emptyText="All done for today"
        renderItem={(task) => (
          <TaskCard
            key={task.id}
            text={task.text}
            isDone={task.isDone}
            onToggle={() => toggleTask(task.id)}
            onRemove={() => removeTask(task.id)}
          />
        )}
      />

      <TaskList
        title="Done"
        tasks={done}
        emptyText="Nothing completed yet"
        renderItem={(task) => (
          <TaskCard
            key={task.id}
            text={task.text}
            isDone={task.isDone}
            onToggle={() => toggleTask(task.id)}
            onRemove={() => removeTask(task.id)}
          />
        )}
      />
    </div>
  );
}

export default App;
