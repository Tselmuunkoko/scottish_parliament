import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MemberApiService } from '../services/member-api.service';

@Component({
  selector: 'app-member',
  templateUrl: 'member.component.html',
  styleUrls: ['member.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberComponent {
  avatar='../../assets/avatar.webp';
  members$ = this.memberApiService.members$;
  constructor(private memberApiService: MemberApiService) { }
  page: number = 1;
}
