import { Component } from '@angular/core';

@Component({
  selector: 'app-dietplan',
  templateUrl: './dietplan.component.html',
  styleUrls: ['./dietplan.component.css']
})
export class DietplanComponent {
 
  items = [
    { name: 'Carbohydrates Diet Plan', details: 'Details for Item 1' },
    ];
    item1 =[
    { name1: 'Proteins Diet Plan', details: 'Details for Item 2' },
    ];
    item2 =[
    { name2: ' Fats Diet Plan', details: 'Details for Item 2' },
    ];
    item3 =[
        { name3: 'Vitamins and Minerals Diet Plan', details: 'Details for Item 2' },
        ];
    item4 =[
          { name4: 'Plant-based and flexitarian diets', details: 'Details for Item 2' },
          ];
    item5 =[
            { name5: 'The MIND diet', details: 'Details for Item 2' },
];
                        

  selectedItem: any;
  selectedItem1:any;
  selectedItem2:any;
  selectedItem3:any;
  selectedItem4:any;
  selectedItem5:any;


  showDetails(item: any) {
    this.selectedItem = item;
    
  }
  showDetails1(item1: any) {
    this.selectedItem1= item1;
  }
  showDetails2(item2: any) {
    this.selectedItem2= item2;
  }
  showDetails3(item3: any) {
    this.selectedItem3= item3;
  }
  showDetails4(item4: any) {
    this.selectedItem4= item4;
  }
  showDetails5(item5: any) {
    this.selectedItem5= item5;
  }



}


