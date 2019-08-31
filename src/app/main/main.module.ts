import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
// tslint:disable-next-line:max-line-length
import { MatIconModule, MatButtonModule, MatTooltipModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';

import { MessageDialogService } from './services/message-dialog.service';
import { MessageService } from './services/message.service';

import { MainComponent } from './main.component';
import { TopComponent } from './top/top.component';
import { ContentComponent } from './content/content.component';
import { StackComponent } from './stack/stack.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    MainComponent,
    TopComponent,
    ContentComponent,
    StackComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    MainComponent
  ],
  entryComponents: [
    MessageComponent
  ],
  providers: [
    MessageDialogService,
    MessageService
  ]
})
export class MainModule { }
