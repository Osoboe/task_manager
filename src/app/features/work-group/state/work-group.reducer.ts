import { createReducer, on } from '@ngrx/store';
import { IWorkGroup } from 'src/app/core/models/work-group.model';

import * as WorkGroupActions from './work-group.actions';

export interface WorkGroupState {
  currentWorkGroupId: number | null;
  workGroups: IWorkGroup[];
  error: string | null;
}

const initialState: WorkGroupState = {
  currentWorkGroupId: 1,
  workGroups: [],
  error: null,
};

export const workGroupReducer = createReducer<WorkGroupState>(
  initialState,

  on(WorkGroupActions.setCurrentWorkGroup, (state, action): WorkGroupState => {
    return {
      ...state,
      currentWorkGroupId: action.workGroupId,
    };
  }),
  on(
    WorkGroupActions.loadWorkGroupsSuccess,
    (state, action): WorkGroupState => {
      return {
        ...state,
        workGroups: action.workGroups,
        error: null,
      };
    }
  ),
  on(
    WorkGroupActions.loadWorkGroupsFailure,
    (state, action): WorkGroupState => {
      return {
        ...state,
        error: action.error,
      };
    }
  )
);
