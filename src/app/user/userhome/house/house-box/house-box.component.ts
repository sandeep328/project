import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-house-box',
  templateUrl: './house-box.component.html',
  styleUrls: ['./house-box.component.css']
})
export class HouseBoxComponent {
  @Input() Products:any;

}
