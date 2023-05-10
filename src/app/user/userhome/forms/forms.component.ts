import { Component } from '@angular/core';
import {FormsService} from 'src/app/services/forms.service'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  
  forums:any;
  name:any;
  mobile:any;
  
 

  com:any;

 

  constructor(private fs:FormsService){

 

      fs.getForum().subscribe({

 

        next:(data:any)=>this.forums = data,

 

        error:()=>this.forums=[]

 

      })

 

  }

 

  onPost(){

 

    let obj ={

 

      "usernmae":sessionStorage.getItem("username"),

 

      "comment":this.com

 

    }

 

    this.fs.postForum(obj).subscribe({

 

      next:()=>alert("successfully Posted"),

 

      error:()=>alert("Error on posting")

 

    })

 

    window.location.reload()

 

  }


}
