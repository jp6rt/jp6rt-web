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
      info: [
        'Provide user friendly interface on web and mobile environments',
        'Develop mobile and web applications using Angular and Ionic',
      ],
      icon: 'uiux'
    },
    {
      position: 1,
      header: 'Back-end Services',
      info: [
        'Provide reliable, scalable and secure web services with AWS stack',
      ],
      icon: 'backend'
    },
    {
      position: 0,
      header: 'DevOps',
      info: [
        'Continuous deployment and integration with Gitlab or Cicle CI',
        'Design and monitor infrastructure on AWS'
      ],
      icon: 'cicd',
      hideBorder: true
    }
  ];

}
