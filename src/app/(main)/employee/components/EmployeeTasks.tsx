"use client"

import { useState } from "react"
import { Check, PlusCircle, Trash } from "phosphor-react"

interface TaskItem {
  id: number
  title: string
  completed: boolean
}

export default function EmployeeTasks() {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: 1, title: "Created Dashboard", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false },
    { id: 4, title: "Task 4", completed: false },
    { id: 5, title: "Task 5", completed: false },
  ])
  const [showAddInput, setShowAddInput] = useState(false)
  const [newTaskText, setNewTaskText] = useState("")

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  const handleAddTask = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!newTaskText.trim()) {
      setShowAddInput(false)
      return
    }
    const newTask: TaskItem = {
      id: Date.now(),
      title: newTaskText.trim(),
      completed: false,
    }
    setTasks((prev) => [...prev, newTask])
    setNewTaskText("")
    setShowAddInput(false)
  }

  const handleDeleteCompleted = () => {
    const remaining = tasks.filter((t) => !t.completed)
    if (remaining.length === tasks.length) {
      // If none completed, remove the last one as default delete behavior
      if (tasks.length > 0) {
        setTasks((prev) => prev.slice(0, prev.length - 1))
      }
    } else {
      setTasks(remaining)
    }
  }

  return (
    <div className="w-full bg-[#F9FAFB] rounded-xl shadow-sm border border-gray-100 p-4 mt-3">
      {/* Title */}
      <h3 className="font-semibold text-[#111827] text-sm">Todays Tasks</h3>

      {/* Subheader with Task Count and Actions */}
      <div className="w-full flex justify-between items-center mt-2 pb-2 border-b border-gray-100">
        <div className="flex items-center">
          <div className="rounded-full h-5 w-5 bg-[#272372] flex items-center justify-center">
            <span className="text-xs font-semibold text-white">
              {tasks.length}
            </span>
          </div>
          <span className="text-[#272372] font-semibold ml-2 text-xs">
            Tasks
          </span>
        </div>

        <div className="flex items-center gap-5">
          {/* Add Task Button */}
          <button
            type="button"
            onClick={() => setShowAddInput((prev) => !prev)}
            className="flex flex-col items-center group cursor-pointer focus:outline-none"
          >
            <PlusCircle
              size={22}
              color="#272372"
              weight="fill"
              className="group-hover:scale-110 transition-transform"
            />
            <span className="text-[8px] text-[#272372] font-semibold mt-0.5">
              Add Task
            </span>
          </button>

          {/* Delete Button */}
          <button
            type="button"
            onClick={handleDeleteCompleted}
            className="flex flex-col items-center group cursor-pointer focus:outline-none"
            title="Delete completed tasks"
          >
            <div className="h-5.5 w-5.5 rounded-full flex items-center justify-center bg-[#F1E0E1] group-hover:bg-[#ebcfd1] transition-colors">
              <Trash size={13} color="#B31212" weight="bold" />
            </div>
            <span className="text-[8px] text-[#B31212] font-semibold mt-0.5">
              Delete
            </span>
          </button>
        </div>
      </div>

      {/* Inline Add Task Input */}
      {showAddInput && (
        <form onSubmit={handleAddTask} className="mt-2.5 flex items-center gap-2">
          <input
            type="text"
            autoFocus
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Type task and press Enter..."
            className="flex-1 text-xs px-2.5 py-1.5 border border-[#272372] rounded-md focus:outline-none bg-white text-[#272372]"
          />
          <button
            type="submit"
            className="text-xs px-3 py-1 bg-[#272372] text-white rounded-md font-medium"
          >
            Add
          </button>
        </form>
      )}

      {/* Task List */}
      <div className="flex flex-col gap-3 mt-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className="flex items-center group cursor-pointer select-none"
          >
            <div
              className={`h-4.5 w-4.5 rounded-full flex items-center justify-center border transition-all ${
                task.completed
                  ? "bg-[#272372] border-[#272372]"
                  : "border-[#272372] bg-white group-hover:bg-[#EAE8FE]"
              }`}
            >
              {task.completed && <Check size={11} color="#ffffff" weight="bold" />}
            </div>
            <span
              className={`text-xs ml-3 transition-colors ${
                task.completed
                  ? "line-through text-gray-400"
                  : "text-[#272372] font-medium"
              }`}
            >
              {task.title}
            </span>
          </div>
        ))}

        {tasks.length === 0 && (
          <p className="text-xs text-gray-400 italic py-2">
            No tasks for today. Click &quot;Add Task&quot; above to create one!
          </p>
        )}
      </div>
    </div>
  )
}
