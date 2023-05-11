import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent {
  

id:any;



forum:any;



query:any;





response:any;






constructor(private ds:FormsService,private ar:ActivatedRoute){



this.ar.params.subscribe(

{

next: (params)=>{

this.id =params['id']

this.readData()

},

error: () => this.id = 0

}

)



}

readData(){

this.ds.getForumById(this.id).subscribe({

next: (data:any)=> this.forum=data,

error: ()=> this.forum= {}

})

}

AddSuggestion(res:string){



if (this.forum && this.forum.responses){

this.forum.responses.push(res);



this.ds.postSuggestion(this.forum).subscribe(



{



next:(data:any)=>{



alert("suggestion posted");



location.reload();





},





error:(error)=>alert("suggestion not posted")



});



}

}
}
