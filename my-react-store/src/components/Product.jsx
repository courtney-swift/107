import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(){

    return(
        <div className="product">
            <img src="https://picsum.photos/200/300" alt="product"></img>
            <h5>Title</h5>
            <div className="price">
                <label>Prices</label>
                <label>Total</label>
            </div>  
            <QuantityPicker></QuantityPicker>
        </div>
    )
}

export default Product;