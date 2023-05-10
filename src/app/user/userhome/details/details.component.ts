import { Component } from '@angular/core';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  contactlist:any;
  constructor(private cs:ContactService){

    this.cs.getContacts().subscribe(
       {
         next: (data:any)=>this.contactlist = data,
         error: ()=> this.contactlist = []
       }
    )
  }
}


