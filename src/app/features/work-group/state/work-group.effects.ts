import { Injectable } from '@angular/core';

import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as WorkGroupActions from './work-group.actions';
import { WorkGroupService } from '../service/workGroup.service';

@Injectable()
export class WorkGroupEffects {
  constructor(
    private actions$: Actions,
    private workGroupService: WorkGroupService
  ) {}

  loadWorkGroups$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WorkGroupActions.loadWorkGroups),
      mergeMap(() =>
        this.workGroupService
          .getAllWorkGroups()
          .pipe(
            map((workGroups) =>
              WorkGroupActions.loadWorkGroupsSuccess({ workGroups })
            )
          )
      )
    )
  );
}
