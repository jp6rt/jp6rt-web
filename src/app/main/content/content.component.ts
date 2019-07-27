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
      text: 'Develop back-end and data services using Go, NodeJS, SQL and NoSQL Databases.',
      icon: 'uiux'
    },
    {
      position: 0,
      header: 'DevOps',
      text: 'Continous integration and deployment with Gitlab CI, Circle CI. Deploy services on Amazon Web Services.',
      icon: 'cicd',
      hideBorder: true
    }
  ];

}
