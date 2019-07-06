import { Component, OnInit } from '@angular/core';
import WorkExperience from '../../types/work-experience';
import { WorkExperienceService } from '../../services/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  public workExperiences: WorkExperience[];

  constructor(
    private workExperienceService: WorkExperienceService
  ) {  }

  /**
   * OnInit lifecycle hook
   */
  ngOnInit() {
    this.workExperiences = this.workExperienceService.getWorkExperiences();
  }

}
