import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Metodos } from 'src/app/common/Metodos';

@Injectable({
  providedIn: 'root',
})
export class loginService extends Metodos {
  constructor(httpclient: HttpClient) {
    super(httpclient);
  }

  // postLogin(data: any, callback: Function) {
  //   this.post('/Auth', data).subscribe({
  //     next: (v) => callback(v),
  //     error: (e) => {},
  //   });
  // }
}
