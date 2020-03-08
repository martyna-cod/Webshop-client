import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Component } from 'react';

import { Row, Col, Carousel, Container, Card } from 'react-bootstrap';

class Home extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Carousel>
						<Carousel.Item style={{ width: '1000px', height: '600px', margin: 'auto' }}>
							<img
								className="d-block w-100"
								src="https://c.static-nike.com/a/images/f_auto/dpr_1.0/w_1239,c_limit/d64de142-a1e0-4062-aeff-31c49f898e4f/womens-shoes-clothing-accessories.jpg"
								alt="Second slide"
							/>
							

							<Carousel.Caption>
								<h2>NIKE</h2>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item style={{ width: '1000px', height: '600px', margin: 'auto' }}>
							<img
								className="d-block w-100"
								src="https://wallpapercave.com/wp/wp2586605.jpg"
								alt="First slide"
							/>

							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item style={{ width: '1000px', height: '600px', margin: 'auto' }}>
							<img
								className="d-block w-100"
								src="https://wallpapercave.com/wp/wp2586572.jpg"
								alt="Third slide"
							/>

							<Carousel.Caption>
								<h3>Third slide label</h3>
								<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Row>
				<Row style={{ marginTop: '65px' }}>
					<Col style={{ padding: '15px', width: '40q0px', height: '400px' }}>
						<Card className="bg-dark text-white">
							<Card.Img
								src="https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w0d9p3xbufkumvplifjh/air-zoom-pegasus-36-flyease-hardloopschoen-dames-PJTJMD.jpg"
								alt="Card image"
							/>
							<Card.ImgOverlay>
								<Card.Title>Shoes</Card.Title>
								<Card.Text style={{color: "black"}}>
						
								</Card.Text>
							</Card.ImgOverlay>
						</Card>
					</Col>
					<Col style={{ padding: '15px', width: '400px', height: '400px' }}>
						<Card className="bg-dark text-white">
							<Card.Img
								src="https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/uzudpzb8eyidjhwf7hgd/indy-icon-clash-sport-bh-met-lichte-ondersteuning-wxKKZW.jpg"
								alt="Card image"
							/>
							<Card.ImgOverlay>
								<Card.Title></Card.Title>
								<Card.Text>
								
								</Card.Text>
								<Card.Text>Last updated 3 mins ago</Card.Text>
							</Card.ImgOverlay>
						</Card>
					</Col>
				</Row>
				<Row style={{marginTop: "200px"}}>
					<Col style={{ padding: '15px', width: '400px', height: '400px' }}>
						<Card className="bg-dark text-white">
							<Card.Img
								src="https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/mwsavq9kkh6qbdyzg1g9/sportswear-damesbroek-80x2fM.jpg"
								alt="Card image"
							/>
							<Card.ImgOverlay style={{marginTop: "450px", color: "black", fontSize: "150px"}}>
								<Card.Title>Clothes and accesories</Card.Title>
							</Card.ImgOverlay>
						</Card>
					</Col>
					<Col style={{ padding: '15px', width: '400px', height: '400px', marginBottom:"200px" }}>
						<Card className="bg-dark text-white">
							<Card.Img
								src="https://c.static-nike.com/a/images/w_960,c_limit/d80be003-7ddc-4385-96bb-13c81728fdd3/image.png"
								alt="Card image"
							/>
							<Card.ImgOverlay style={{marginTop: "350px"}}>
								<Card.Title></Card.Title>
							
								<Card.Text>JOIN OUR TEAM</Card.Text>
							</Card.ImgOverlay>
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Home;
