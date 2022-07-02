import { Injectable } from '@angular/core';
import { HttpParams,HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ExaServiceService {
  api_url = 'http://localhost:8000';
  constructor(private http: HttpClient) { }
  getmessage(userresponse:string){
    
    let params =  new HttpParams();
    let temp = ' '
    params = params.append("user_response",userresponse);
    temp = this.api_url +'/chat/'+ userresponse;

    return this.http.get(temp);
  }
  
  get_exabyte_service(serviceType:string){
    
    let params =  new HttpParams();
    let temp = ' '
    params = params.append("user_response",serviceType);
    temp = this.api_url +'/Services/'+ serviceType;

    return this.http.get(temp);
  }

  get_about(){
    
    let params =  new HttpParams();
    let temp = ' '

    temp = this.api_url +'/About/';

    return this.http.get(temp);
  }

  get_price_pre(userresponse:string){
    
    let params =  new HttpParams();
    let temp = ' '
    params = params.append("user_response",userresponse);
    temp = this.api_url +'/Finance/';

    return this.http.get(temp);
  }

  get_news(userresponse:string){
    
    let params =  new HttpParams();
    let temp = ' '
    params = params.append("user_response",userresponse);
    temp = this.api_url +'/News/'+userresponse;

    return this.http.get(temp);
  }

  get_activity(userresponse:string){
    
    let params =  new HttpParams();
    let temp = ' '
    params = params.append("user_response",userresponse);
    temp = this.api_url +'/chat/'+ userresponse;

    return this.http.get(temp);
  }

  get_selection(userresponse:string){
    
    let params =  new HttpParams();
    let temp = ' '
    params = params.append("user_response",userresponse);
    temp = this.api_url +'/chat/'+ userresponse;

    return this.http.get(temp);
  }

  get_stock(userresponse:string){
    
    let params =  new HttpParams();
    let temp = ' '
    params = params.append("user_response",userresponse);
    temp = this.api_url +'/chat/'+ userresponse;

    return this.http.get(temp);
  }

  get_career(userresponse:string){
    
    let params =  new HttpParams();
    let temp = ' '
    params = params.append("user_response",userresponse);
    temp = this.api_url +'/Jobs/';

    return this.http.get(temp);
  }

  get_Contacts(){
    
    let temp = ' '
    temp = this.api_url +'/Contacts/';

    return this.http.get(temp);
  }

  get_About(){
    
    let temp = ' '
    
    temp = this.api_url +'/About/';

    return this.http.get(temp);
  }
  
  get_Projects(){
    
    let temp = ' '
    temp = this.api_url +'/Projects/';

    return this.http.get(temp);
  }
  get_Activities(){
    
    let temp = ' '
    temp = this.api_url +'/Activities/';

    return this.http.get(temp);
  }
  get_slider(){
    let temp = ' '
    temp = this.api_url +'/Slider/';

    return this.http.get(temp);
  }

  get_Research(){
    let temp = ' '
    temp = this.api_url +'/Research/';

    return this.http.get(temp);
  }

  send_Message(name:any,email:any,message:any){
    let temp = ' '
    temp = this.api_url +'/Send/'+ name +'/'+email+'/'+message+'/';
    return this.http.get(temp);
  }
  

}
