import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(props){
    const [quantity, setQuantity] = useState(1);
        //Variable    Function       State   Initial Value
    //const quantity =

function handleDecrease(){
let nextVal = quantity - 1;
//quantity = quantity - 1;
if (nextVal > -1){
    setQuantity(nextVal);
}
props.onChange(nextVal); //Notify the parent of value change
}

function handleIncrease(){
let nextVal = quantity + 1;
//quantity = quantity + 1;
setQuantity(nextVal);
props.onChange(nextVal); //notify the parent
}

    return(
<div className="quantity-picker">
    <button className="btn-minus" onClick={handleDecrease}>-</button>
    <label className="label-qty">{quantity}</label>
    <button className="btn-plus" onClick={handleIncrease}>+</button>
</div>

    );
}
export default QuantityPicker;