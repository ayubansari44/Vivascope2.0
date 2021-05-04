import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent, canActivate: [AuthGuard] },
  // { path: 'home', component: HeaderComponent, canActivate:[AuthGuard] },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
