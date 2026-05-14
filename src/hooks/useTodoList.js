import { useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'web-programming.todoList.v1'

const readTasks = () => {
  if (typeof window === 'undefined') {
    return []
  }
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) {
    return []
  }
  try {
    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const formatDate = (isoString) => {
  const date = new Date(isoString)
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date)
}

function useTodoList() {
  const [tasks, setTasks] = useState(() => readTasks())
  const [draft, setDraft] = useState('')

  const trimmedDraft = draft.trim()
  const canSubmit = trimmedDraft.length > 0

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const displayTasks = useMemo(
    () =>
      tasks.map((task) => ({
        ...task,
        createdAtLabel: formatDate(task.createdAt),
      })),
    [tasks],
  )

  const addTask = () => {
    if (!trimmedDraft) {
      return
    }

    const newTask = {
      id: crypto.randomUUID(),
      title: trimmedDraft,
      createdAt: new Date().toISOString(),
    }

    setTasks((current) => [newTask, ...current])
    setDraft('')
  }

  const removeTask = (taskId) => {
    setTasks((current) => current.filter((task) => task.id !== taskId))
  }

  return {
    tasks: displayTasks,
    draft,
    setDraft,
    addTask,
    removeTask,
    canSubmit,
  }
}

export default useTodoList
