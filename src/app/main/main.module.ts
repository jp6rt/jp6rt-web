import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MainComponent } from './main.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    MainComponent,
    TopComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
