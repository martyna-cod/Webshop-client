import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

class Home extends Component {
	render() {
		return (
			<div>
				<div>
					<h1 style={{ marginTop: '80px', marginLeft: '45px' }}>Running is a gift</h1>
				{/* 	<p style={{ fontSize: '35px', justifyContent: 'center' }}>
						In our webshop you will find everything you need to get better progress and that can help you be
						more happy
					</p> */}
				</div>
				<LinkContainer style={{ marginLeft: '50px', color: "white" }} to="/products">
					<Button type="Submit" className="btn-dark">
						See our products
					</Button>
				</LinkContainer>
			</div>
		);
	}
}

export default Home;
