export class product{
  constructor(
    public id:number,
    public name:string,
    public price:number,
    public img:string,
    public size:number,
    public suger:number,
    public isAddedToCart: boolean,
    public boughtItemsCount: number

  ){}
}
