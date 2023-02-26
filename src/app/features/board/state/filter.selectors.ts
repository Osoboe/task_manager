import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromFilter from './filter.reducer';

const getFilterFeatureSelector = createFeatureSelector<fromFilter.State>(
  fromFilter.filterFeatureKey
);

export const getFilterState = createSelector(
  getFilterFeatureSelector,
  (state) => state
);
