import Link from "next/link";
import React from "react";

export default function NavbarComponent() {
  return (
    <div className="fix bg-[#154734]">
      <div className="navbar shadow-sm  text-[#D2A94C] font-bold">
        <div className="flex-1">
          <a className="text-xl">Task Management</a>
        </div>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/todo-list">Todo List</Link>
          <Link href="/complete-task">Complete Task</Link>
          <Link href="/about-me">About Me</Link>
        </div>
      </div>
    </div>
  );
}
