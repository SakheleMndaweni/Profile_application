import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {ExaServiceService} from '../exa-service.service';
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  constructor(private s: ExaServiceService) { }

  ngOnInit(): void {
  }

}
