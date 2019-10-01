import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PhonebookService {

  constructor(private http: HttpClient) { }

  getContactDetails(id: number): Observable<any> {
  return this.http.get('http://localhost:4300/contacts/' + id);
  }
}
