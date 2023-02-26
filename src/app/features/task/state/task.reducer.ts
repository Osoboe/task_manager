import { Action, createReducer, on } from '@ngrx/store';
import { ITask } from 'src/app/core/models/task.model';
import * as TasksActions from './task.actions';

export interface TaskState {
  tasks: ITask[];
  isEditing: boolean;
  error: string;
}

const initialState: TaskState = {
  tasks: [],
  isEditing: false,
  error: '',
};

export const taskReducer = createReducer<TaskState>(
  initialState,
  on(TasksActions.loadTasksSuccess, (state, action): TaskState => {
    return {
      ...state,
      tasks: action.tasks,
      error: '',
    };
  }),
  on(TasksActions.loadTasksFailure, (state, action): TaskState => {
    return {
      ...state,
      error: action.error,
    };
  })
  //   on(TasksActions.createTask, (state, action): TaskState => {
  //     const updatedTasks = [...state.tasks, action.task];
  //     return {
  //       ...state,
  //       tasks: updatedTasks,
  //     };
  //   }),
  //   on(TasksActions.updatetask, (state, action): TaskState => {
  //     const updatedTasks = state.tasks.map((task) =>
  //       action.task.id === task.id ? action.task : task
  //     );
  //     return {
  //       ...state,
  //       tasks: updatedTasks,
  //     };
  //   }),
  //   on(TasksActions.deleteTask, (state, action): TaskState => {
  //     const updatedTasks = state.tasks.filter((i) => i.id !== action.taskId);
  //     return {
  //       ...state,
  //       tasks: updatedTasks,
  //     };
  //   }),
  //   on(TasksActions.setTaskEditing, (state, action): TaskState => {
  //     return {
  //       ...state,
  //       isEditing: action.isEditing,
  //     };
  //   })
);
