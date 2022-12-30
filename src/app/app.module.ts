
// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ItemDirective } from './item.directive';
import { MemberComponent } from './member/member.component';

import { appRoutes } from "./app.routes";
import { RouterModule } from "@angular/router";
import { MemberPageComponent } from './member-page/member-page.component';
import { MemberApiService } from './services/member-api.service';
import { NgxPaginationModule } from 'ngx-pagination';
// @NgModule decorator with its metadata
@NgModule({
  declarations: [
    AppComponent,
    ItemDirective,
    MemberComponent,
    MemberPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [MemberApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/