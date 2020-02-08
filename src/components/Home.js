import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Carousel } from 'react-bootstrap';

class Home extends Component {
	render() {
		return (
			<div>

				<div>
				<Carousel>
  <Carousel.Item style={{width: "1000px", height: "600px", margin: "auto"}}>
    <img
      className="d-block w-100"
      src="https://www.itl.cat/pngfile/big/208-2087764_description-fitness-girls-nike-iphone-wallpaper-from-workout.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>NIKE</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  style={{width: "1000px", height: "600px",  margin: "auto"}}>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0FNenUjRCISYHeNLUIUx-huDN6HchWGZQ_YH6AFoVHWj2TW2l"
      alt="Secind slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  style={{width: "1000px", height: "600px", margin: "auto"}}>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM_Rh_uxT5EiqLb6SVOZe_l6p7fCqL9d2SQ5odYX3RRYCVomMJ"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
				</div>
			</div>
		);
	}
}

export default Home;
