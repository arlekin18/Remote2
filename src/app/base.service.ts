import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BaseService {
  constructor(private http: HttpClient) { }

  OnInit() {

  }

  public getMessage(): Observable<any> {
    return this.http
      .get('http://localhost:3300/');

  }

  /* getMessage() {
    this.request.open('GET', 'http://localhost:3300/api/query');
    this.request.onreadystatechange = this.requestHandler;
    this.request.send();
  }

  requestHandler() {
    if (this.request.readyState === 4) {
      const status = this.request.status;
      if (status === 200) {
        document.write(this.request.responseText);
      } else {
        document.write('Ответ сервера ' + this.request.statusText);
      }
    }
  } */
}
