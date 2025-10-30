import { useState } from "react";
import "./TaskForm.css";

export default function TaskForm({ onAdd }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(value);
    setValue("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-form__input"
        type="text"
        placeholder="Add a new task"
        autoComplete="off"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="task-form__button" disabled={value.length === 0}>
        <img
          className="task-form__button-image"
          src="src/assets/Plus.svg"
          alt="plus"
        />
      </button>
    </form>
  );
}
