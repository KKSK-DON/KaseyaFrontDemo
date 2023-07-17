import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AssignmentComponent } from './assignment/assignment.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
  },
  {
    path: 'assignment',
    component: AssignmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
