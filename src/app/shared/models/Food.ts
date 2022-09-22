import { NumberSymbol } from "@angular/common";

export class Food {
  // exclamation makes prop mandatory. ? makes it optional
  id!:number;
  name!:string;
  price!:number;
  tags?:string[];
  favorite:boolean = false;
  stars:number = 0;
  imageUrl!:string;
  origins!:string[];
  cookTime!:string;

}
