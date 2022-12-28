import { Component } from '@angular/core';
import { MemberApiService } from '../member-api.service';

@Component({
  selector: 'app-member',
  templateUrl: 'member.component.html'
})
export class MemberComponent {
  members$ = this.memberApiService.members$;
  constructor(private memberApiService: MemberApiService) { 
  }
}
