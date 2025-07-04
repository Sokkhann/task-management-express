'use client';
import { useState } from 'react';

interface Props {
  onAdd: (title: string) => void;
}

export default function TaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState('');

  const handleSubmit = () => {
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
        className="flex-1 border border-[#154734] px-3 py-2 rounded"
      />
      <button onClick={handleSubmit} className="bg-[#5D3A1A] text-[#D2A94C] font-bold px-4 rounded">
        Add
      </button>
    </div>
  );
}
