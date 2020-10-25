import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualscrollComponent } from './components/virtualscroll/virtualscroll.component';
import { DragComponent } from './components/drag/drag.component';

const routes: Routes = [
  { path: 'virtualscroll', component: VirtualscrollComponent },
  { path: 'drag', component: DragComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'virtualscroll' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
