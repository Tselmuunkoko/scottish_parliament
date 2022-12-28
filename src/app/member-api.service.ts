import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberApiService {
  private memberUri = 'https://data.parliament.scot/api/members';
  public members$ = this.http.get<any[]>(this.memberUri).pipe();
  constructor(private http: HttpClient) {}
}
