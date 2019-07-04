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
        color: 'rgb(214,30,68,0.5)',
        position: 'Survey Programmer',
        technologies: [],
        description: faker.lorem.sentences(10),
        duration: 'March 2011 - June 2012'
      },
      {
        company: 'Sizmek',
        color: 'rgb(0,105,255,0.5)',
        position: 'Tier III Support Engineer',
        technologies: [],
        description: faker.lorem.sentences(10),
        duration: 'March 2011 - June 2012'
      },
      {
        company: 'Arcanys',
        color: 'rgb(121,38,255,0.5)',
        position: 'Web Developer',
        technologies: [],
        description: faker.lorem.sentences(10),
        duration: 'Current'
      }
    ];
  }

}
