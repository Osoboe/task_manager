import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITask, TaskStatus } from 'src/app/core/models/task.model';
import * as fromTaskReducer from './task.reducer';

export const getTasksFeatureSelector =
  createFeatureSelector<fromTaskReducer.TaskState>('task');

export const getTaskState = createSelector(
  getTasksFeatureSelector,
  (state) => state.tasks
);

export const getTasks = createSelector(
  getTasksFeatureSelector,
  (state) => state.tasks
);
