import type { PropsWithChildren, ReactElement } from 'react'
import { createContext, useCallback, useContext, useState } from 'react'
import { ITask } from '../../types/task'

interface TaskContextProps {
  tasks: ITask[]
  addTask: (task: ITask) => void
  removeTask: (task: ITask) => void
  updateTask: (task: ITask) => void
}

const TaskManagerAppStorageKey = 'TaskManagerAppStorageKey'
export function TaskProvider({ children }: PropsWithChildren): ReactElement {
  const storedValue = localStorage.getItem(TaskManagerAppStorageKey);
  const [tasks, setTasks] = useState<ITask[]>(storedValue ? JSON.parse(storedValue) : [])

  const addTask = useCallback((task: ITask) => {
    const newTasks = [...tasks, task]
    localStorage.setItem(TaskManagerAppStorageKey, JSON.stringify(newTasks))
    setTasks(newTasks)
  }, [tasks])

  const removeTask = useCallback((task: ITask) => {
    const newTasks = tasks.filter(t => t.id !== task.id)
    localStorage.setItem(TaskManagerAppStorageKey, JSON.stringify(newTasks))
    setTasks(newTasks)
  }, [tasks])

  const updateTask = useCallback((task: ITask) => {
    const taskToUpdate = tasks.find(t => t.id === task.id)

    if(!taskToUpdate) {
      return
    }

    const index = tasks.indexOf(taskToUpdate)
    const newTasks = [...tasks]
    newTasks[index] = task

    localStorage.setItem(TaskManagerAppStorageKey, JSON.stringify(newTasks))
    setTasks(newTasks)
  }, [tasks])

  return <TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>{children}</TaskContext.Provider>
}

export const TaskContext = createContext<TaskContextProps | null>(null)

export function useTaskContext(): TaskContextProps {
  const context = useContext(TaskContext)

  if (!context) {
    throw new Error(
      'Missing TaskContext, please make sure to use inside `<TaskProvider/>`.'
    )
  }

  return context
}
