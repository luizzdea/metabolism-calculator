
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetabolismComponent } from './metabolism.component';


const routes: Routes = [
  {
    path: '',
    component: MetabolismComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetabolismRoutingModule {

}
