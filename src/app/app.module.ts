import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {
  MatTabsModule,
  MatIconModule,
  MatStepperModule,
  MatCardModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { SkillMapComponent } from './tabs/skill-map/skill-map.component';
import { ProjectsComponent } from './tabs/projects/projects.component';
import { AboutMeComponent } from './tabs/about-me/about-me.component';
import { WorkExperienceComponent } from './tabs/work-experience/work-experience.component';
import { ContactMeComponent } from './tabs/contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillMapComponent,
    ProjectsComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
