import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  constructor(private http: HttpClient) { }

  getContentHtml(): Observable<string> {
    return this.http.get('assets/content-editor.html', { responseType: 'text' });
  }
}
