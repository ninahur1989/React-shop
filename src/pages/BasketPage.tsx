import React from 'react'
import {IProduct} from '../models'
import MyBasket from '../Basket'
import { ProductBasket } from '../components/ProductBasket'
import { observer } from 'mobx-react-lite'
import {Button} from 'react-bootstrap';



// export function Basket obse() {
//   return (
//     <div>
//        { MyBasket.goods.map(product => <Product product={product} key={product.id} />) }
//     </div>
//   )
// }
const Backet1 = observer(()=> {
  return(<>
      <div>
        {MyBasket.TotalPrice()}
      </div>
      <Button className="border py-2 px-4 rounded flex flex-col items-center mb-2"  onClick={MyBasket.RemovAll}>

          Click if you want to clear your basket
      </Button>     
      <div>
          { MyBasket.goods.map(product => <ProductBasket product={product} key={product.id} />) }
      </div>
      </>
  )

})
export default Backet1
