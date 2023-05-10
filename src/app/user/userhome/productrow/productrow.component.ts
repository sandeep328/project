import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productrow',
  templateUrl: './productrow.component.html',
  styleUrls: ['./productrow.component.css']
})
export class ProductrowComponent {
  @Input() Products:any;
  

}
