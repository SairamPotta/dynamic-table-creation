import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(array: Array<string>, args: string, order: number): Array<string> {
    array.sort((a: any, b: any) => {
	    if ( a[args] < b[args] ){
	    	return -1* order;
	    }else if( a[args] > b[args] ){
	        return 1* order;
	    }else{
	    	return 0;	
	    }
    });
    return array;
  }

}