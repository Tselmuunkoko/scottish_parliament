import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member.model';
import { MemberApiService } from '../services/member-api.service';
import { ActivatedRoute } from '@angular/router';
import { Party } from '../models/party.model';
import { MemberParty } from '../models/memberparty.model';

@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.css']
})
export class MemberPageComponent implements OnInit{
  avatar='../../assets/avatar.webp';
  member : any;
  personId: any;
  parties: MemberParty [] = [];
  members$ = this.memberApiService.members$;
  memberParties$ = this.memberApiService.memberParties$;
  parties$ = this.memberApiService.parties$;
  constructor(private memberApiService: MemberApiService,  private route: ActivatedRoute,) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.personId = params['id'];
    });
    this.members$.subscribe(data => {
      data.filter(e => { 
        if(e.PersonID==this.personId) {
          this.member = e;
          return;
        }
      });
    })
    this.memberParties$.subscribe(data => {
      data.filter((e) => {
        if(e.PersonID == this.personId) {
          let party: MemberParty = e;
          this.parties$(e.PartyID).subscribe(
            (data: Party) => {
              party.Party = data;
            }
          )
          this.parties.push(party);
          return;
        }
      })
    })
  }
}
