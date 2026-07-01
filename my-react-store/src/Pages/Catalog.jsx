import Product from "../components/Product";
import DataService from "../Services/dataService";
import "./Catalog.css";
import { useEffect ,useState } from "react";

function Catalog(){
    const [products, setProducts] = useState([]); //Hold all the products always
    const [categories, setCategories] = useState ([]); //Holds the categories
    const[productsToDisplay, setProductsToDisplay] =useState([]) //TO hold the products to show
    //let products = [];

    function loadCatalog(){
        let categoriesFilter = ["fruit","grocery","merch"]
        setCategories(categoriesFilter);
        
    }

    function filter(category){
        let list=[];
        //Find the products that mattet the catcgories
        //this is a for loop and at the end you have to move the result to 
        //products to display
        for(let i=0; i< products.length; i++)
            {
                let prod = products[i];
                if(prod.category ===category)
                {
                    list.push(prod)
                }
            }
            setProductsToDisplay(list);
        }
 
        useEffect(()=>{
            //load the data here
            let service = new DataService();
            let data = service.getProduct();
            setProducts(data);
            setProductsToDisplay(data);
            loadCatalog();
        },[]//empty array means this runs only ONCE
    );

    function clearFilter(){
        setProductsToDisplay(products);
    }

    return(
        <div className="catalog">
            <h1>Check Out Our Products</h1>
            <div>
                <button onClick={clearFilter}>All</button>
            </div>
            {categories.map(cat => <button key={cat} onClick={() => filter(cat)} >{cat}</button>)}
           {productsToDisplay.map(prod => <Product key={prod._id} data ={prod}/>)}
           {/* for(x,y,z)
                    temp[x]
                    */}
        </div>
    );
}
export default Catalog;