import { Component, OnInit } from '@angular/core';
import {ExaServiceService} from '../exa-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects =[];
  constructor(private s: ExaServiceService) { }

  ngOnInit(): void {
    this.displayProjects();
    
  }

  displayProjects(){
   

  
}

}
