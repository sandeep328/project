import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {


constructor(private router:Router,private route:ActivatedRoute){}

navigate(url:string){

  if(url==""){

    window.location.reload()

  }

  else{

    this.router.navigate([url],{relativeTo:this.route})

  }

}
logout(){
  this.router.navigateByUrl('/login')
}
}
