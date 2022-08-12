import {useEffect, useState} from 'react'
import {IProduct} from './models'
import {makeAutoObservable} from "mobx"


class Mybasket{
    constructor(){
        makeAutoObservable(this)
        let a:number;
    }
    
    
    goods: IProduct[] = []
    

    AddGoods(product:IProduct)
    {
      this.goods.push(product)
      console.log("item addet to basket")
      return this.goods
    }
    RemoveGood(id:number)
    {
      this.goods = this.goods.filter(good => good.id !== id)
      console.log("item removed from the basket")
      return this.goods
    }

    TotalPrice()
    {
      let a :number = 0;
      console.log(this.goods)
      for (let index = 0; index < this.goods.length; index++)
      {
        a = a+ this.goods[index].price
      }

      return(
        <div>
          <b/>total price of your order is {a}
        </div>
      )
    }
    RemovAll()
      {
         this.goods.length = 0;
         console.log("all are removed")
      }
    
    
    
}
function Sum(count:number) {
  
}
export default new  Mybasket()
 