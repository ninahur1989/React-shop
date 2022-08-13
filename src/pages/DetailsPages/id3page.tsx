import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/products";

 const Page3 = () => {

const { id } = useParams();
const {loading, error, products, addProduct} = useProducts()
      
return (
    <div>
    <h2>About with Id: {id} </h2>
        {/* { products.map(product => <Details product={product} key={ product.id}  />) } */}
        <div>
            it is 3
        </div>
        
        
    </div>
    )
}
export default Page3
      