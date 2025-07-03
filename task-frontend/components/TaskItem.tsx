import { Task } from "../type/task";

interface Props {
  task: Task;
  onToggle: (task: Task) => void;
  onDelete: (id: string) => void;
  onUpdate: (task: Task, newTitle: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete, onUpdate }: Props) {
  return (
    <li className="flex justify-between items-center border p-2 rounded">
      <span
        className={`cursor-pointer ${
          task.done ? "line-through text-gray-400" : ""
        }`}
        onClick={() => onToggle(task)}
      >
        {task.title}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => {
            onDelete(task._id);
          }}
          className="text-red-500"
        >
          ❌
        </button>
        <button
          onClick={() => {
            const newTitle = prompt("Update task title:", task.title);
            if (newTitle && newTitle.trim() !== "") {
              onUpdate(task, newTitle.trim());
            }
          }}
          className="text-blue-500"
        >
          ✏️
        </button>
      </div>
    </li>
  );
}
