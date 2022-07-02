import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {ExaServiceService} from '../exa-service.service';
import {Conversation} from './exabyte.conversation';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-exabot',
  templateUrl: './exabot.component.html',
  styleUrls: ['./exabot.component.css']
})
export class ExabotComponent implements OnInit {
  mes:any;
  bot:string = 'bot';
  user:string = 'user';
  conversation:Conversation[] = [];
  user_response = '';
  messageStack:Array<any> = [];
  constructor(private s: ExaServiceService) { }

  ngOnInit(): void {
    
    
  }

  updateResponce(event:any){
    console.log(event.target.value);
    this.user_response  = event.target.value;
  }

  displayMessage(){
      let temp =  this.user_response;
      this.s.getmessage(temp).subscribe(data => {this.mes = data;});
      setInterval(this.createConv, 1000);

  }

  createConv(){
      let today= new Date();
      let todaysDataTime = '';
      let temp =  this.user_response;
      var conv = null;
      var v_URL ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-OgvxeSJW2H_RjPi1FnMDV6HM89LpMcWwg&usqp=CAU";
      var b_URL= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe3VJhJQLILQtykMOiTBs91Sa3MO7Q9fmClQ&usqp=CAU";
      var e_URL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgK3AsJW0uCr4kmQHshnaBngngs4-iaIwR4g&usqp=CAU";
      todaysDataTime =  formatDate(today, 'hh:mm:ss a', 'en-US', 'GMT+2');
    if(this.mes != null){
      conv = new Conversation();
      conv.setVisitotImg(v_URL);
      conv.setBotImg(b_URL);
      conv.setTime(todaysDataTime);
      conv.setRequest(temp);
      conv.setResponse(this.mes['my_action']);
      this.messageStack.push(conv);
    }else{
      conv = new Conversation();
      conv.setVisitotImg(v_URL);
      conv.setBotImg(e_URL);
      conv.setTime(todaysDataTime);
      conv.setRequest(temp);
      conv.setResponse('Network Error Please resend the message'); 
      this.messageStack.push(conv);
    }

  }

}

