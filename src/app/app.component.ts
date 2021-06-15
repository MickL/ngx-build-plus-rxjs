import { Component } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-build-plus-rxjs';
  click$ = new Subject<MouseEvent>();
  private destroy$ = new Subject();

  constructor() {
    fromEvent<MouseEvent>(document, 'click')
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(50)
      )
      .subscribe(event => {
        this.click$.next(event);
      })
  }
}
