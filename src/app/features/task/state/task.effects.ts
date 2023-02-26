import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TaskService } from '../service/task.service';
import * as TasksActions from './task.actions';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private taskService: TaskService) {}

  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.loadTasks),
      mergeMap(() =>
        this.taskService
          .getTasksByProjectId()
          .pipe(map((tasks) => TasksActions.loadTasksSuccess({ tasks })))
      )
    )
  );
}
