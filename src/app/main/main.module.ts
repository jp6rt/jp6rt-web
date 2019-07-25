import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule } from '@angular/material';

import { MainComponent } from './main.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    MainComponent,
    TopComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
