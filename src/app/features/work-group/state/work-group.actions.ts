import { createAction, props } from '@ngrx/store';
import { IWorkGroup } from 'src/app/core/models/work-group.model';

export const setCurrentWorkGroup = createAction(
  '[workGroup Page] Set Current workGroup',
  props<{ workGroupId: number }>()
);

export const loadWorkGroups = createAction('[workGroup Page] Load');

export const loadWorkGroupsSuccess = createAction(
  '[workGroup Page] Load Success',
  props<{ workGroups: IWorkGroup[] }>()
);

export const loadWorkGroupsFailure = createAction(
  '[workGroup Page] Load Fail',
  props<{ error: string }>()
);
