import type { Task } from '@/view/types';
import { defaultTasks_ } from '@/dummy';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export interface TaskService {
  tasks: Task[];
  createTask: (description: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  reorderTasks: (newTasks: Task[]) => void;
}

export default function useTaskService(): TaskService {
  // Lista de Tasks
  const [tasks, setTasks] = useState<Task[]>(defaultTasks_);

  /** Função para adicionar nova Task */
  const createTask = (description: string) => {
    const task: Task = {
      id: uuid(),
      description,
      completed: false,
    };

    setTasks([...tasks, task]);
  };

  /** Função para deletar Task */
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  /** Função para marcar uma tarefa como feita */
  const toggleTask = (id: string) => {
    const tasksCopy = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    });

    setTasks(tasksCopy);
  };

  const reorderTasks = (newTasks: Task[]) => {
    setTasks(newTasks);
  };

  return {
    tasks,
    createTask,
    deleteTask,
    toggleTask,
    reorderTasks,
  };
}
