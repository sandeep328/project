import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-box',
  templateUrl: './details-box.component.html',
  styleUrls: ['./details-box.component.css']
})
export class DetailsBoxComponent {
  @Input()  contact:any;

}
