import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { MessageComponent } from '../message/message.component';

@Injectable()
export class MessageDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  open(): MatDialogRef<MessageComponent> {
    return this.dialog.open(MessageComponent, { panelClass: 'message-dialog' });
  }
}
