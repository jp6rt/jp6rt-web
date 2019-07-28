import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<MessageComponent>,
    private formBuilder: FormBuilder
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
    console.log('form', this.form.value);
  }

}
