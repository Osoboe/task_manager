import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorkGroupState } from './work-group.reducer';

const getWorkGroupFeatureSelector =
  createFeatureSelector<WorkGroupState>('workGroup');

export const getCurrentWorkGroupId = createSelector(
  getWorkGroupFeatureSelector,
  (state) => state.currentWorkGroupId
);

export const isCurrentWorkGroup = createSelector(
  getWorkGroupFeatureSelector,
  getCurrentWorkGroupId,
  (state, currentWorkGroupId) => {
    return !!state.workGroups.find((p) => p.id === currentWorkGroupId);
  }
);

export const getWorkGroups = createSelector(
  getWorkGroupFeatureSelector,
  (state) => state.workGroups
);
