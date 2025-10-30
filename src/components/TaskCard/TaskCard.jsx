import "./TaskCard.css";

export default function TaskCard({ text, onToggle, onRemove, isDone }) {
  return (
    <div className={`task-list__card task-list__card--done-${isDone}`}>
      <p className="task-list__card-text">{text}</p>
      <div className="task-list__card-buttons">
        <button
          type="button"
          className="task-list__card-button task-list__card-button_check"
          onClick={onToggle}
        >
          <img src="src/assets/Check.svg" alt="check-btn" />
        </button>

        <button
          type="button"
          className="task-list__card-button task-list__card-button_trash"
          onClick={onRemove}
        >
          <img src="src/assets/TrashSimple.svg" alt="trash-btn" />
        </button>
      </div>
    </div>
  );
}
