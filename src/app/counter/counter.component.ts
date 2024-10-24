import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state'; // Ensure this path is correct
import { selectCount } from '../state/counter/counter.selector'; // Ensure this path is correct
import { AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { decrement, increment, reset } from '../state/counter/counter.actions';
import { CounterStore } from '../store/counter.store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'], // Correctly defined
  imports: [AsyncPipe, RouterModule],
  standalone: true,
  providers: [CounterStore],
})
export class CounterComponent {
  count$: Observable<number>;
  counterStore = inject(CounterStore);

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount);
  }
  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
