import { Component, OnInit } from '@angular/core';
import { ForecastComponent } from './shared/components/forecast/forecast.component';
import { CommonModule } from '@angular/common';
import { setLoading } from './shared/store/actions/loading.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadingState } from './shared/store/reducers/loading.reducer';

export interface AppState {
  loading: LoadingState;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    ForecastComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.select(state => state.loading.isLoading);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(setLoading(false));
    }, 2000);
  }
}