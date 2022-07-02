import { Component, OnInit } from '@angular/core';
import {ExaServiceService} from '../exa-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nextjob',
  templateUrl: './nextjob.component.html',
  styleUrls: ['./nextjob.component.css']
})
export class NextjobComponent implements OnInit {

  constructor(private s: ExaServiceService,private router: Router) {

  }

  ngOnInit(): void {
  }
  gohome(){
    this.router.navigate(['/']);
   
  }

  goAbout(){
    this.router.navigate(['About_us']);
  }

  goExperience(){
    this.router.navigate(['Jobs']);
  }
  goService(){
    this.router.navigate(['Services']);
   
  }
  goProjects(){
    this.router.navigate(['projects']);
  }
  goContacts(){
    this.router.navigate(['Contacts']);
  }
  goChat(){
    this.router.navigate(['Chat']);
   
  }
  goResearch(){
    this.router.navigate(['Chat']);
   
  }

}
