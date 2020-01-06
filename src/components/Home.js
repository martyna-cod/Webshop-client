import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavItem,
	MDBNavbarToggler,
	MDBCollapse,
	MDBMask,
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBView,
	MDBContainer,
	MDBFormInline,
	MDBAnimation
} from 'mdbreact';
import '../index.css';
import { LinkContainer } from 'react-router-bootstrap';
class Home extends React.Component {
	state = {
		collapsed: false
	};

	handleTogglerClick = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	};

	render() {
		const overlay = (
			<div id="sidenav-overlay" style={{ backgroundColor: 'transparent' }} onClick={this.handleTogglerClick} />
		);
		return (
			<div id="apppage">
				<Router>
					<div>
						<MDBNavbar color="primary-color" dark expand="md" fixed="top" scrolling transparent>
							<MDBContainer>
								<MDBNavbarBrand>
									<strong className="white-text" />
								</MDBNavbarBrand>
								<MDBNavbarToggler onClick={this.handleTogglerClick} />
								<MDBCollapse isOpen={this.state.collapsed} navbar>
									<MDBNavbarNav left>
										<LinkContainer to="/Home">
											<MDBNavItem className="links" active>
												Home
											</MDBNavItem>
										</LinkContainer>
										<LinkContainer to="/products">
											<MDBNavItem className="links" active>
												Our products
											</MDBNavItem>
										</LinkContainer>
										<LinkContainer to="/shopping-cart">
											<MDBNavItem className="links" active>
												Cart
											</MDBNavItem>
										</LinkContainer>

										<LinkContainer to="/Home">
											<MDBNavItem className="links" active>
												Home
											</MDBNavItem>
										</LinkContainer>
									</MDBNavbarNav>
									<MDBNavbarNav right>
										<MDBNavItem>
											<MDBFormInline waves>
												<div className="md-form my-0">
													<input
														className="form-control mr-sm-2"
														type="text"
														placeholder="Search"
														aria-label="Search"
													/>
												</div>
											</MDBFormInline>
										</MDBNavItem>
									</MDBNavbarNav>
								</MDBCollapse>
							</MDBContainer>
						</MDBNavbar>
						{this.state.collapsed && overlay}
					</div>
				</Router>
				<MDBView>
					<MDBMask className="d-flex justify-content-center align-items-center gradient">
						<MDBContainer>
							<MDBRow>
								<MDBCol md="6" className="white-text text-center text-md-left mt-xl-5 mb-5">
									<MDBAnimation type="fadeInLeft" delay=".3s">
										<h1 className="h1-responsive font-weight-bold mt-sm-5">
											Make purchases with our app
										</h1>
										<hr className="hr-light" />
										<h6 className="mb-4">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus
											quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi
											sequi non animi ea dolor molestiae iste.
										</h6>
										<MDBBtn color="white">Download</MDBBtn>
										<MDBBtn outline color="white">
											Learn More
										</MDBBtn>
									</MDBAnimation>
								</MDBCol>

								<MDBCol md="6" xl="5" className="mt-xl-5">
									<MDBAnimation type="fadeInRight" delay=".3s" />
								</MDBCol>
							</MDBRow>
						</MDBContainer>
					</MDBMask>
				</MDBView>
			</div>
		);
	}
}

export default Home;
