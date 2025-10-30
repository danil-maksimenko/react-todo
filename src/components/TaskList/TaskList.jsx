import "./TaskList.css";

export default function TaskList({
  title,
  tasks,
  renderItem,
  emptyText = "No items",
}) {
  return (
    <section className="task-list">
      <p className="task-list__list-name">
        {title} - {tasks.length}
      </p>

      {tasks.length === 0 ? (
        <p className="task-list__empty">{emptyText}</p>
      ) : (
        tasks.map(renderItem)
      )}
    </section>
  );
}
