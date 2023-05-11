import { Component,Input } from '@angular/core';
import {FormsService} from 'src/app/services/forms.service'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  
  forumlist:any;



  query:any;

  

  id:any;



  data:any;

  

  constructor(private fs:FormsService){

  

  this.fs.getForum().subscribe(

  

  {

  

  next: (data:any)=> this.forumlist =data,

  

  error: ()=> this.forumlist=[]

  

  }

  

  )}

  

  AddQuestion(){

  

  var f:any={

  

  id:this.forumlist.length+1,

  

  question:this.query,

  

   responses:[]

  

  }

  

  this.fs.postquery(f).subscribe(

  

  {

  

  next:(f:any)=>{

  

  alert("question posted");

  

  location.reload();

  

  },

  

  error:(error)=>alert("not posted")

  

  }

  

  );

  

  }
}