import React from 'react';
import { Link } from "react-router-dom";


export default function ProductList(props) {
    return (
        <div>
          <div>
        

        <h2>Homemade Products</h2>
    </div>
        {props.products.map(product => (
            <div className="product">
                 <div key={product.id}>
                <Link to={`/product/${product.id}/ticket`}>{product.name}</Link> <br/> <br/>
                <img alt={product.name} src={product.picture} /> <br/> <br/>
                <h5>{product.description} <br/> <br/> </h5> <br/>

               </div>
            </div>
        ))} 
    </div>
    
);
}