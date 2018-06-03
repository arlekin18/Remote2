import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseService } from '../base.service';
import { Subscription, Observable, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit, OnDestroy {
  private _subs: Subscription[] = [];
  _images: any[] = [];
  _posts: any[] = [];

  constructor(private baseService: BaseService) {
    const source = interval(2000);
    this.subs = source
      .pipe(
        switchMap(() => this.baseService.getMessage())
      )
      .subscribe(resp => {
        console.log(resp);
        const time = this.msToTime(resp.timeStamp - Date.now());
        if (resp.type === 'file') {
          this._images.push({ timestamp: resp.timeStamp, livetime: time, imageData: 'data:image/png;base64,' + resp.content });
        } else {
          this._posts.push({ timestamp: resp.timeStamp, livetime: time, post: resp.content });
        }
      });

  }

  ngOnInit() {
    setInterval(() => {
      this.polling();
    }, 1000);
  }

  set subs(sub) {
    this._subs.push(sub);
  }

  polling() {
    const self = this;
    const currentDate = Date.now();
    this._posts.forEach((post, index) => {
      if (currentDate >= post.timestamp) {
        const removed = this._posts.splice(index, 1);
        this.polling();
      }
    });
    this._images.forEach((image, index) => {
      if (currentDate >= image.timestamp) {
        const removed = this._images.splice(index, 1);
        this.polling();
      }
    });
  }

  ngOnDestroy() {
    this._subs.forEach(sub => sub.unsubscribe());

  }

  msToTime(s) {
    const ms = s % 1000;
    s = (s - ms) / 1000;
    const secs = s % 60;
    s = (s - secs) / 60;
    const mins = s % 60;
    const hrs = (s - mins) / 60;

    return hrs + 'h. :' + mins + 'm. :' + secs + 's. ';
  }

}
