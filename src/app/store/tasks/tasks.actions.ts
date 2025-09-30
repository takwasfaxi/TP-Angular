import { createAction, props } from '@ngrx/store';
import { Task } from '../../models/task.model';

export const addTask = createAction('[Task] Add Task', props<{ task: Task }>());
export const updateTask = createAction('[Task] Update Task', props<{ task: Task }>());
export const deleteTask = createAction('[Task] Delete Task', props<{ id: number }>());
export const toggleTask = createAction('[Task] Toggle Task', props<{ id: number }>());

export const clearTasks = createAction('[Task] Clear'); 
