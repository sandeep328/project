import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'rxjs';

@Pipe({
  name: 'fliterprice'
})
export class FilterpricePipe implements PipeTransform {
  price:any;

  transform(products: any, min_v: number, max_v:number): any {
    if(max_v===1000){
      return products.filter((x:any)=>(parseInt(x.Calories)>=min_v))
    }
    return products.filter((x:any)=>(parseInt(x.Calories)<=max_v && parseInt(x.Calories)>=min_v))
  }
}

