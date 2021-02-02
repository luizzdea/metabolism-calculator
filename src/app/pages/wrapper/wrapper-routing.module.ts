
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from './wrapper.component';


const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../pages/landing/landing.module').then(m => m.LandingModule)
      },
      {
        path: 'metabolism-calculator',
        loadChildren: () => import('../../pages/metabolism/metabolism.module').then(m => m.MetabolismModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WrapperRoutingModule {

}
