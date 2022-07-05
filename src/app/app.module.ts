import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EducationComponent } from './education/education.component';
import { AboutSakheleComponent } from './about-sakhele/about-sakhele.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ResearchComponent } from './research/research.component';
import { ProjectsComponent } from './projects/projects.component';
import { NextjobComponent } from './nextjob/nextjob.component'
import { NewsComponent } from './news/news.component';
import { ExabotComponent } from './exabot/exabot.component';
import { ServicesComponent } from './services/services.component';
import { JobsComponent } from './jobs/jobs.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HttpClientModule} from '@angular/common/http';
import { FinanceComponent } from './finance/finance.component';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from  '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    AboutSakheleComponent,
    ContactsComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ResearchComponent,
    ProjectsComponent,
    NextjobComponent,
    NewsComponent,
    ExabotComponent,
    ServicesComponent,
    JobsComponent,
    AboutUsComponent,
    FinanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
