import { Injectable } from '@angular/core';
import WorkExperience from '../types/work-experience';

import faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  /**
   * retrieve the work experiences
   */
  getWorkExperiences(): WorkExperience[] {
    return [
      {
        company: 'SSI',
        color: 'rgb(214,30,68,0.85)',
        position: 'Survey Programmer',
        technologies: [],
        responsibilities: [
          faker.lorem.sentence(10), faker.lorem.sentence(10)
        ],
        duration: 'March 2011 - June 2012'
      },
      {
        company: 'Sizmek',
        color: 'rgb(0,105,255,0.85)',
        position: 'Tier III Support Engineer',
        technologies: [],
        responsibilities: [
          faker.lorem.sentence(10), faker.lorem.sentence(10)
        ],
        duration: 'March 2011 - June 2012'
      },
      {
        company: 'Arcanys',
        color: 'rgb(121,38,255,0.85)',
        position: 'Web Developer',
        technologies: [],
        responsibilities: [
          faker.lorem.sentence(10), faker.lorem.sentence(10)
        ],
        duration: 'Current'
      }
    ];
  }
}
