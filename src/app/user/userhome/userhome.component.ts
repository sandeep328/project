import { Component } from '@angular/core';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  prodlist:any;
  min_v=0;
  max_v=500;
  isD = "none";
  constructor(ps:HomeService){
    ps.getslider().subscribe(
      {
        next: (data:any) => this.prodlist = data,
        error:()=>this.prodlist = []
      }
    )
   
  }
}




