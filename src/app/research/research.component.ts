import { Component, OnInit } from '@angular/core';
import {ExaServiceService} from '../exa-service.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {
  research=[];
  
  constructor(private s: ExaServiceService) {

  }
  
  ngOnInit(): void {
  }

  displayAbout(){
   
   
  
  }

}
