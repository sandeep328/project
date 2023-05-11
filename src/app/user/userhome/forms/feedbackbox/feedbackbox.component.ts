import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feedbackbox',
  templateUrl: './feedbackbox.component.html',
  styleUrls: ['./feedbackbox.component.css']
})
export class FeedbackboxComponent {
  @Input() q:any;

}
