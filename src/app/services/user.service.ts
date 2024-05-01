import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService{
  constructor(private http: HttpClient){}
  baseUrl = 'https://reqres.in/api/users'
  baseUrl2 = 'https://reqres.in/api/users'

  getALlUsers = async (page: number): Promise<Observable<any>> => {
    return await this.http.get<any>(`${this.baseUrl}?page=${page}`)
  }

  getUserById = async (id: string): Promise<Observable<any>> => {
    return await this.http.get<any>(`${this.baseUrl2}/${id}`)
  }
}
