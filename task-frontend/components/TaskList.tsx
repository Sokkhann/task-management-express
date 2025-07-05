import { Task } from "../src/type/task";
import TaskItem from "./TaskItem";
interface Props {
  tasks: Task[];
  onToggle: (task: Task) => void;
  onDelete: (id: string) => void;
  onUpdate: (task: Task, newTitle: string) => void;
}

export default function TaskList({ tasks, onToggle, onDelete, onUpdate }: Props) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}
