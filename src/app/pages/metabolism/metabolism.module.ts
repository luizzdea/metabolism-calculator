import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetabolismComponent } from './metabolism.component';
import { MetabolismRoutingModule } from './metabolism-routing.module';



@NgModule({
  declarations: [
    MetabolismComponent
  ],
  imports: [
    CommonModule,
    MetabolismRoutingModule
  ]
})
export class MetabolismModule { }
