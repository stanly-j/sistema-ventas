import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { RouterModule, Routes } from '@angular/router';

const Router: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: InicioComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(Router)],
})
export class InicioRoutingModule {}
