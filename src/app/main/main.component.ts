import { Component, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    iconRegistry.addSvgIcon('golang', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/go.svg'));
    iconRegistry.addSvgIcon('angular', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular.svg'));
    iconRegistry.addSvgIcon('aws', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/aws.svg'));
    iconRegistry.addSvgIcon('docker', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/docker.svg'));
    iconRegistry.addSvgIcon('mongodb', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/mongodb.svg'));
    iconRegistry.addSvgIcon('nodejs', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/nodejs.svg'));
    iconRegistry.addSvgIcon('uiux', sanitizer.bypassSecurityTrustResourceUrl('assets/images/ui-ux.svg'));
    iconRegistry.addSvgIcon('cicd', sanitizer.bypassSecurityTrustResourceUrl('assets/images/ci-cd.svg'));
  }
}
