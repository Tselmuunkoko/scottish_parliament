import { Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { MemberComponent } from "./member/member.component";
import { ErrorComponent } from "./error.component";

export const appRoutes: Routes = [
  { path: "home", component: AppComponent },
  { path: "member", component: MemberComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: ErrorComponent }
];
