import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoadingState } from '../reducers/loading.reducer'; // Adjust path as needed

export const selectLoadingState = createFeatureSelector<LoadingState>('loading');

export const selectIsLoading = createSelector(
  selectLoadingState,
  (state: LoadingState) => state.isLoading
);
