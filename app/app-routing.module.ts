import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
  },
  {
    path: 'assignment',
    component: AssignmentComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
