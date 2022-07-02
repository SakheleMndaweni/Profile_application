import { Component, OnInit } from '@angular/core';
import {ExaServiceService} from '../exa-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  imageSrc = 'assets/images/profile.jpeg';
  about:any;
  about_des:string ='';
  financing:string = '';
  dev :string='';
  maint:string='';
  des:string='';


  constructor(private s: ExaServiceService,private router: Router) {

   }


  ngOnInit(): void {
    this.displayAbout();
  }
  
  learnmore(){
    this.router.navigate(['Research']);
  }

  displayAbout(){
   
      this.s.get_About().subscribe(data => {
        this.about = data;
      });
      

    
  }

}
