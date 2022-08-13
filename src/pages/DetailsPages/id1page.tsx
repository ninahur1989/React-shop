import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/products";

 const Page1 = () => {

const { id } = useParams();
const {loading, error, products, addProduct} = useProducts()
      
return (
    <div>
    <h2>About with Id: {id} </h2>
        {/* { products.map(product => <Details product={product} key={ product.id}  />) } */}
        <div>
            it is 1
        </div>
        
        
    </div>
    )
}
export default Page1
      