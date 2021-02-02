import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitBtnComponent } from './submit-btn/submit-btn.component';



@NgModule({
  declarations: [
    SubmitBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SubmitBtnComponent
  ]
})
export class SharedModule { }
