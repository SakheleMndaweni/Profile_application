import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  title = 'Mndaweni App';
  loremIpsumText = `Some quick example text to build on the panel title and make up the bulk of the panel's content.`;
  constructor(private router: Router) {

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
    
}
