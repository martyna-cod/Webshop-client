import React, { Component } from 'react'
import { Navbar, Nav, Form, Button, FormControl   } from "react-bootstrap"
import ProductListContainer from './ProductListContainer'



export default class Home extends Component {
    render() {
        return (
   <div>
            <div>
            <>  
        <div className="Nav">
  <Navbar>
    
    <Navbar.Brand className="logo" href="#home">My Webshop</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Kategorie</Nav.Link>
      <Nav.Link href="/shopping-cart">Koszyk</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl size="sm" type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="secondary" size="sm">Szukaj</Button>
      <Nav.Link href="/login">Zaloguj sie </Nav.Link>
    </Form>
  </Navbar>
       </div>
</>
       </div>
            <div className="title">
               <h2>Witaj w naszym sklepie .</h2>
           </div>
           <div>
           <div>
             <ProductListContainer />
           </div>
           </div>
            </div>
            
        )
       
    }
}
