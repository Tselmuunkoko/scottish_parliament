import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NEVER, ReplaySubject, timer } from 'rxjs';
import { map, tap, share } from 'rxjs/operators';
import { Party } from '../models/party.model';

@Injectable({
  providedIn: 'root'
})
export class MemberApiService {
  private baseUri = 'https://data.parliament.scot/api/'
  public members$ = this.http.get<any[]>(this.baseUri+'members').pipe(
    tap(() => console.log('request happened')),
    map((members) => members.map((m) => m)),
    share({
      connector: () => new ReplaySubject(1),
      resetOnComplete: () => NEVER,
    })
  );
  public memberParties$ = this.http.get<any[]>(this.baseUri+'memberparties').pipe(
    tap(() => console.log('request happened')),
    map((members) => members.map((m) => m)),
    share({
      connector: () => new ReplaySubject(1),
      resetOnComplete: () => NEVER,
    })
  );
  public parties$ = (PartyID: number) => this.http.get<Party>(this.baseUri+'parties/'+PartyID).pipe();
  public websites$ = this.http.get<any[]>(this.baseUri+'websites').pipe(
    tap(() => console.log('request happened')),
    map((members) => members.map((m) => m)),
    share({
      connector: () => new ReplaySubject(1),
      resetOnComplete: () => NEVER,
    })
  );
  constructor(private http: HttpClient) {}
}
