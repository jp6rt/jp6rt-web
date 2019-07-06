import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public summary: string;
  public hobbies: string;
  public availability: string;

  /**
   * OnInit lifecycle hook
   */
  ngOnInit() {
    // tslint:disable-next-line:no-trailing-whitespace
    this.summary = `"I"m a web developer and a tech enthusiast. 
      I"ve been in the tech industry for 9 years, from a php developer to a javascript developer and now slowly transitioning to golang"`;

    this.hobbies = `"Gundam, Anime, Microcontrollers, Learning new technology"`;

    // tslint:disable-next-line:no-trailing-whitespace
    this.availability = `"Will work for dog food. Seriously, we have dogs to feed, so I work as a freelance developer on my free time. 
      Contact me if you are looking for a freelance dev."`;
  }

}
