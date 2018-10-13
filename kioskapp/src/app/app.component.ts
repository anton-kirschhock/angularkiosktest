import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const formatString = 'DD/MM/YYYY HH:mm:ss';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentTime: string;
  specialTime: string;
  $ticker: Observable<moment.Moment>;

  ngOnInit() {
    this.$ticker = interval(500).pipe(map(() => moment()));

    this.$ticker.subscribe(m => {
      this.currentTime = m.format(formatString);
    });
  }
}
