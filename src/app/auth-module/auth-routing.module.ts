import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModuleComponent } from './auth-module.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';

const Router: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent,
        //canActivate: [AuthenticationGuardGuard],
      },
      {
        path: 'recovery',
        component: RecoveryComponent,
        //canActivate: [AuthenticationGuardGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(Router)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
