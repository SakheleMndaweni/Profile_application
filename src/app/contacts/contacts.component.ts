import { Component, OnInit } from '@angular/core';
import {ExaServiceService} from '../exa-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts=[];
  ad=[];
  message='';
  name='';
  email='';
  respo:any;
  res='';
  constructor(private s: ExaServiceService) { }

  ngOnInit(): void {
  }

  
  send(){

    Swal.fire({
      title: 'Application Information',
      text: 'Oops! service currently under maintenance. Please use the communication platforms mentioned above.',
      icon: 'info',
      iconHtml: '!',
      confirmButtonText: 'OK',
      showCloseButton: true,
      confirmButtonColor:'#1f1f38',
    })

    if(this.message !=' ' && this.email !=' ' && this.name){
        this.s.send_Message(this.name,this.email,this.message).subscribe(data => {
          this.respo = data;
        });
        setInterval(this.check, 2000);
    }else {
      this.res ='Missing values'
    }
    
  }

  check(){
    if(this.respo != null){
      this.res ='Message sent';
      this.name = " ";
      this.email = " ";
      this.message =" ";
      
    }else {

      this.res ='Message not sent';
    }


  }

}
