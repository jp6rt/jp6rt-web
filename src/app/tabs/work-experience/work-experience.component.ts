import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../../types/work-experience';

import faker from 'faker';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  public workExperiences: WorkExperience[];

  /**
   * OnInit lifecycle hook
   */
  ngOnInit() {
    this.workExperiences = [
      {
        company: 'SSI',
        position: 'Survey Programmer',
        technologies: [],
        description: faker.lorem.sentence(),
        duration: 'March 2011 - June 2012'
      },
      {
        company: 'Sizmek',
        position: 'Tier III Support Engineer',
        technologies: [],
        description: faker.lorem.sentence(),
        duration: 'March 2011 - June 2012'
      },
      {
        company: 'Arcanys',
        position: 'Web Developer',
        technologies: [],
        description: faker.lorem.sentence(),
        duration: 'Current'
      }
    ];
  }

}
