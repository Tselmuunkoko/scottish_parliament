import { Routes } from "@angular/router";
import { MemberComponent } from "./member/member.component";
import { ErrorComponent } from "./error/error.component";
import { MemberPageComponent } from "./member-page/member-page.component";

export const appRoutes: Routes = [
  { path: "member", component: MemberComponent},
  { path: "member/:id", component: MemberPageComponent},
  { path: "", redirectTo: "member", pathMatch: "full" },
  { path: "**", component: ErrorComponent }
];
