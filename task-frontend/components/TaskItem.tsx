import { Task } from "@/type/task";
import { PenLine, X } from "lucide-react";


interface Props {
  task: Task;
  onToggle: (task: Task) => void;
  onDelete: (id: string) => void;
  onUpdate: (task: Task, newTitle: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete, onUpdate }: Props) {
  return (
    <li className="flex justify-between items-center border-[#154734] border p-2 rounded">
      <span
        className={`cursor-pointer ${
          task.done ? "line-through text-[#154734]" : ""
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
          className="text-[#5D3A1A]"
        >
          <X />
        </button>
        <button
          onClick={() => {
            const newTitle = prompt("Update task title:", task.title);
            if (newTitle && newTitle.trim() !== "") {
              onUpdate(task, newTitle.trim());
            }
          }}
          className="text-[#154734]"
        >
          <PenLine />
        </button>
      </div>
    </li>
  );
}
