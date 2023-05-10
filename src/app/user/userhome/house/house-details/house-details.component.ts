import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent {
  id:any;
  details1:any;
  constructor(private Ds:HomeService,private ar:ActivatedRoute){
    
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
   this.Ds.getDetails(this.id).subscribe(
        {
        next: (data:any)=>this.details1=data,
        error: ()=> this.details1 = {}
     }
    )
 }
 
}
