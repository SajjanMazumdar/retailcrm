import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustfilterPipe } from './custfilter.pipe';



@NgModule({
  declarations: [
    CustfilterPipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CustfilterPipe
  ]
})
export class SharedModule { }
