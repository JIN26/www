
import { Single } from "../../components/common"
import { singleProduct } from "../../data"
import "./Product.scss"

const Product = () => {

  //Fetch data and send to Single Component
  return (
    <div className="product">
       <Single {...singleProduct}/>
    </div>
  )
}

export default Product