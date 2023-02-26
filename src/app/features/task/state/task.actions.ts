import { createAction, props } from '@ngrx/store';
import { ITask } from 'src/app/core/models/task.model';

export const loadTasks = createAction('[Tasks] Load');

export const loadTasksSuccess = createAction(
  '[Tasks] Load Success',
  props<{ tasks: ITask[] }>()
);

export const loadTasksFailure = createAction(
  '[Tasks] Load Failure',
  props<{ error: string }>()
);

export const updateTask = createAction(
  '[Tasks] Update Task',
  props<{ task: ITask }>()
);
