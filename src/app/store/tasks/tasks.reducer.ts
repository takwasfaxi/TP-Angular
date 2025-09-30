import { createReducer, on } from '@ngrx/store';
import { Task } from '../../models/task.model';
import { addTask, updateTask, deleteTask, toggleTask , clearTasks } from './tasks.actions';

export const initialState: Task[] = [];

export const tasksReducer = createReducer(
  initialState,
  on(addTask, (state, { task }) => [...state, task]),
  on(updateTask, (state, { task }) => state.map(t => t.id === task.id ? task : t)),
  on(deleteTask, (state, { id }) => state.filter(t => t.id !== id)),
  on(toggleTask, (state, { id }) =>
    state.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
  ),
  on(clearTasks, (_) => [])
);
