import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modulos/inicio/inicio.module').then((m) => m.InicioModule),
    //canActivate: [AuthGuardGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth-module/auth-module.module').then(
        (m) => m.AuthModuleModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth-module/auth-module.module').then(
        (m) => m.AuthModuleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
