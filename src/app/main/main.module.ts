import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatButtonModule, MatTooltipModule } from '@angular/material';

import { MainComponent } from './main.component';
import { TopComponent } from './top/top.component';
import { ContentComponent } from './content/content.component';
import { StackComponent } from './stack/stack.component';

@NgModule({
  declarations: [
    MainComponent,
    TopComponent,
    ContentComponent,
    StackComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
