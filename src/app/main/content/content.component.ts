import { Component } from '@angular/core';

import Stack from 'src/app/types/stack';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  public stacks: Stack[] = [
    {
      position: 0,
      header: 'UI/UX Development',
      text: 'Front end web application development with Angular 2+.',
      icon: 'uiux'
    },
    {
      position: 1,
      header: 'Back-end Services',
      text: 'Front end web application development with Angular 2+.',
      icon: 'uiux'
    },
    {
      position: 0,
      header: 'DevOps',
      text: 'Front end web application development with Angular 2+.',
      icon: 'uiux',
      hideBorder: true
    }
  ];

}
