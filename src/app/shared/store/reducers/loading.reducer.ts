import { createReducer, on } from '@ngrx/store';
import * as LoadingActions from '../actions/loading.actions';

export interface LoadingState {
  isLoading: boolean;
}

export interface AppState {
    loading: LoadingState;
  }  

const initialState: LoadingState = {
  isLoading: true,
};

export const loadingReducer = createReducer(
  initialState,
  on(LoadingActions.setLoading, (state, { isLoading }) => ({ ...state, isLoading }))
);
