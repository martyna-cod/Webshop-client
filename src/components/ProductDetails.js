import React from 'react'
import {
  //BrowserRouter as Router,
  Link,
} from "react-router-dom";


export default function (props) {
  console.log("PRODUCT DETAILES PROPS papapapa", props)
    return (
        <div>  
           <Link to="/"> GO BACK TO EVENTS </Link>
          <div>
          </div>
            <div>
              <h1>Product Details lblab</h1>

          
             <p> {props.product.price}
              {props.product.name}
              {props.product.description}</p>
              </div>
        </div>
      );
    }
    
    