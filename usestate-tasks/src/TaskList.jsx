import { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const addTask = () => {
    if (!title.trim()) {
      return;
    }
    const newTask = { id: Date.now(), title: title.trim(), done: false };
    setTasks((prev) => [...prev, newTask]);
    setTitle("");
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };
  const completedTasks = tasks.filter((task) => task.done).length;
  return (
    <div className="task-list">
      <div className="task-input">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="ახალი დავალება..."
        />
        <button type="button" onClick={addTask}>
          დამატება
        </button>
      </div>
      <p>
        შესრულებულია {completedTasks} / {tasks.length}
      </p>
      {tasks.length === 0 ? (
        <p>სია ცარიელია — დაამატე პირველი დავალება</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span
                className={task.done ? "done" : ""}
                onClick={() => toggleTask(task.id)}
              >
                {task.title}
              </span>
              <button onClick={() => deleteTask(task.id)}>წაშლა</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
