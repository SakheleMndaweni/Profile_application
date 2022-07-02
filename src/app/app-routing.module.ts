import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EducationComponent} from './education/education.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AboutSakheleComponent} from './about-sakhele/about-sakhele.component';
import {LoginComponent} from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ResearchComponent } from './research/research.component';
import { ProjectsComponent } from './projects/projects.component';
import { NextjobComponent } from './nextjob/nextjob.component';
import { NewsComponent } from './news/news.component';
import { ExabotComponent } from './exabot/exabot.component';
import { ServicesComponent } from './services/services.component';
import { JobsComponent } from './jobs/jobs.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FinanceComponent } from './finance/finance.component'

const routes: Routes = [{path: '',redirectTo:'/home',pathMatch: 'full'},
                       {path:'home',component:HomeComponent},
                       {path:'Contacts',component:ContactsComponent},
                       {path:'About',component:AboutSakheleComponent},
                       {path:'Login',component:LoginComponent},
                       {path:'Admin_sakhele',component:AdminComponent},
                       {path:'Research',component:ResearchComponent},
                       {path:'Finance',component: FinanceComponent},
                       {path:'projects',component:ProjectsComponent},
                       {path:'Next_job',component:NextjobComponent},
                       {path:'News',component: NewsComponent},
                       {path:'Chat',component:ExabotComponent},
                       {path:'Jobs',component:JobsComponent },
                       {path:'About_us',component:AboutUsComponent},
                       {path:'Services',component:ServicesComponent},
                       {path:'Education',component:EducationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

