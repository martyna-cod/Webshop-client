import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

const FooterPage = () => {  
	return (
		<MDBFooter style={{marginTop: "400px"}} color="black" className="font-small pt-4 mt-4">
			<MDBContainer fluid className="text-center">
				<MDBRow>
				<MDBContainer fluid>
        <MDBRow>
		
          <MDBCol>
          
            <ul  style={{fontSize: "13px"}}>
              <li className="list-unstyled">
                <a href="#!">Promotions</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Find a store</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Become a member</a>
              </li>
        
            </ul>
          </MDBCol>
		  <MDBCol>
           
            <ul style={{fontSize: "13px"}}>
              <li className="list-unstyled">
                <a href="#!">Order Status</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Shipping and Delivery</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Returns</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Payment Options</a>
              </li>
			  <li className="list-unstyled">
                <a href="#!">Contact us	</a>
              </li>
            </ul>
          </MDBCol>
		  <MDBCol>
      
            <ul    style={{fontSize: "13px"}}>
              <li className="list-unstyled">
                <a href="#!">News</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Investors</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Purpose</a>
              </li>
        
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
				</MDBRow>
			</MDBContainer>
			<div style={{padding: "25px"}} className="footer-copyright text-center py-3">
				<MDBContainer style={{padding: "5px"}}fluid>
				
			Netherlands	&copy; {new Date().getFullYear()} Inc. All Rights Reserved
			<br/>
					<img style={{padding: "5px"}}
						src="https://media.bodyandfit.com/i/bodyandfit/mastercard?locale=nl-nl,en-gb,*&layer0=$FOOTER_ICON_001$&fmt=webp"
						alt="Second slide"
					/> 
					<img style={{padding: "5px"}}
						src="https://media.bodyandfit.com/i/bodyandfit/paypal?locale=nl-nl,en-gb,*&layer0=$FOOTER_ICON_001$&fmt=webp"
						alt="Second slide"
					/>
					<img style={{padding: "5px", width: "38px"}}
						src="data:image/png;base64,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"
						alt="Second slide"
					/>
				</MDBContainer>
			</div>
		</MDBFooter>
	);
};

export default FooterPage;
