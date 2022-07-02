export class Conversation{
      requestMessage:string ='';
      responseMessage:string='';
      visitor_img:string='';
      bot_img:string='';
      time_stemp:any;
      constructor(){
        
         
      }
      getTime(){
          return this.time_stemp;
      }
      setTime(t:any){
          this.time_stemp =t;

      }
      getVisitorImg(){
          return this.visitor_img;
      }
      getBotImg(){
          return this.bot_img;

      }
     
      setVisitotImg(v:any){
          this.visitor_img = v;
      }
      setBotImg(b:any){
          this.bot_img = b;
      }


     
      getRequestMessage(){
          return this.requestMessage;
      }
      getResponseMessage(){
          return this.responseMessage;
      }
      setResponse(r:string){
           this.responseMessage = r;
      }

      setRequest(r:string){
          this.requestMessage = r
      }
}