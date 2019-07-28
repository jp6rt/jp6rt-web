import { Component } from '@angular/core';
import { MessageDialogService } from '../services/message-dialog.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {

  constructor(
    private messageDialogService: MessageDialogService
  ) { }

  openGithub(): void {
    window.open('https://github.com/jp6rt');
  }

  openMessage(): void {
    this.messageDialogService.open();
  }

}
