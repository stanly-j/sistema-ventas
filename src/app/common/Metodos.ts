import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

export class Metodos {
  constructor(private http: HttpClient) {}

  get(metodo: string, responseType: any = 'json') {
    return this.http.get(`${environment.API_URL}${metodo}`, {
      responseType: responseType,
    });
  }

  post(metodo: string, body?: any) {
    return this.http.post(`${environment.API_URL}${metodo}`, body);
  }

  put(metodo: string, body?: any) {
    return this.http.put(`${environment.API_URL}${metodo}`, body);
  }
  
  patch(metodo: string, body?: any) {
    return this.http.patch(`${environment.API_URL}${metodo}`, body);
  }
}
