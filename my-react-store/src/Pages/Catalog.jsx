import Product from "../components/Product";
import DataService from "../Services/dataService";
import "./Catalog.css";
import { useEffect ,useState } from "react";

function Catalog(){
    const [products, setProducts] = useState([]);
    //let products = [];
    useEffect(()=>{
        //load the data here
        let service = new DataService();
        let data = service.getProduct();
        setProducts(data);
    },[]//empty array means this runs only ONCE
    )
    return(
        <div className="catalog">
            <h1>Check Out Our Products</h1>
           {products.map(prod => <Product key={prod._id} data ={prod}/>)}
           {/* for(x,y,z)
                    temp[x]
                    */}
        </div>
    );
}
export default Catalog;