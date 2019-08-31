import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';

import { MessageService } from 'src/app/main/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<MessageComponent>,
    private formBuilder: FormBuilder,
    private message: MessageService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      message: ['', [ Validators.required, Validators.minLength(2) ]]
    });
  }

  close() {
    this.dialogRef.close();
  }

  send() {
    this.message
      .send(this.form.value)
      .pipe(take(1))
      .subscribe(
        (success) => {
          this.snackBar.open('Message sent! If you provided a contact information, I will be sure to get in touch with you soon', null, {
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: 'message-sent-notification'
          });
          this.close();
        },
        (error) => {
          this.snackBar.open('Sorry! There seems to be an error when sending a message at the moment', null, {
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: 'message-error-notification'
          });
        }
      );
  }

}
