import { Component, OnInit } from '@angular/core';
import {ExaServiceService} from '../exa-service.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private s: ExaServiceService) { }

  ngOnInit(): void {
  }

}
