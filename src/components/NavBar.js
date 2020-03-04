import React from 'react';
import { Dropdown, Button, Form, FormControl, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { IoIosHeart } from 'react-icons/io';
import { IoMdCart } from 'react-icons/io';
import { IoIosPerson } from 'react-icons/io';
import { connect } from 'react-redux';
import { getProductsByCategory } from '../actions/products';

function NavBar(props) {
	return (
		<div>
			<div className="navBar" >
				<img className="navbar-img-brands-logo"
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAAdVBMVEX///8AAADz8/Pi4uLAwMDo6OjDw8OAgICrq6vt7e0YGBjc3NzV1dWZmZn7+/vl5eVgYGASEhKhoaFmZmZZWVl8fHyFhYUrKyu7u7seHh5MTEyLi4uoqKhvb29RUVHOzs5EREQ5OTkyMjIjIyOTk5M/Pz90dHSY3gLbAAADcUlEQVR4nO3a6XqqMBCA4QZ3xLXuS7HV9v4v8YC4oGEJgiRwvvd3H2ecJkMm8vEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGKChOwHJUFPc5kpT4BjutK2pFG2hJ26k1m52aOoK7gpTFoXV7thi39cW3xG2tthhzuAghBhY+jJoCLHTF/2i1f30yiC+tS5Py8tAV7cODNudpV8HMXO15vFxFGKuMXywK3ydlsY0fDMvCV1tahTsCt9kqndlehZeGksdgb1dsb7WQfwa8ARb+YlMSw/rDDbi7tMpPQFZ45zKqNSYre5YhG11t4iA7efyU148q9l5KINY63+MB4KmtSgpmnM6PNZBbLSdr591g4TaJYQaPe0Kn8bz9bPGJaXem+NYzflaqoPYvjtsFstLUm8N4px+5TKIdfetQbO6NrDN2yJE7QrfVxlbMgP3mth7Tt3erlhG1kH8mdMiLuzbpi3+s51B1K440zmCx7g/30/FfnDrPldIfgw4X0v64h2luE3bkXSP4DFCC7ioE9bjXCGZl3u8V9YN5Tgu4POSdoVvYmCLuHhIM+dnDduLY2IdNN/SJds+ZJpn5absivOqM7NFBKzHXF+9rhil7IqzhRkjeJznQfmFj/CeFZP0Otj6b+mSWc8ZZ70zUNgVPn0/cSnbSklnaO9pz4obI27p0shpK95jWeGb2WRGjeCxuhGZK0yn998rUq13hreIq++o7I+J71fETduRNoaN4PH6Md9gG/Of7K3mKSeoB+aN4PHkpnkrhrQyrPb2O0MZvNHO2PN1lKTjwLGz6lv+6hhajeZ0byf8aYQfs27pUsXtj5D1UfU5EfZl8vk60vSFb6ngz7zX2lIpHpCyMXcET6IwOWRk5C2dAmn+yMvoETzRqNhCdAy9pVOh8ABRZsCLMnk4hRXChBdlcilqVYyrMIIna6R/SwWLSozgKXr562BXZQRPk7cQFbilU5Xh4iHCvvot4m6XoxCnOrSIu5ebxbJiI7iC2UuFMO1FmUK8csjaV3AEV5G5cVbrli6LbMOpXb8WEeKmF+Cqli0ibKVYCPkKvH5U1sW4PsfKRL2vlI3RrW2rlDXjX6Xbr/6jOpy5e7kK9ueuQj/0FWjoTPeb4Oefye9svnPrNWMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGfwD8Q4ilL8pDfIAAAAASUVORK5CYII="
					alt=""
				/>

				<img className="navbar-img-brands-logo"
					src="data:image/png;base64,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"
					alt=""
				/>

				<img className="navbar-img-brands-logo"
					src="data:image/png;base64,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"
					alt=""
				/>

				<img className="navbar-img-brands-logo"
					src="data:image/png;base64,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"
					alt=""
				/>

				<img className="navbar-img-brands-logo"
					src="data:image/png;base64,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"
					alt=""
				/>
				<img className="navbar-img-brands-logo"
					src="data:image/png;base64,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"
					alt=""
				/>

				<img className="navbar-img-brands-logo"
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAADBwcEhISFcXFzb29v09PQJCQnIyMiDg4P4+Pjp6enw8PBAQECWlpY0NDSxsbHV1dVvb2/Ozs5KSkoRERHj4+OmpqZXV1e7u7uIiIivr6/Dw8MtLS1jY2NOTk6enp55eXmRkZEpKSl7e3sYGBg7OztxcXGBsxpMAAADRklEQVR4nO3a13biMBCAYRmMY2yaKaYEAikk7/+GS8oSjSQXcjgrkf2/OwtfzBxb0miMUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQssEsTXuO8Xy27dTaZv881p+Y7KIPT2K0HA2jRs+3kGE+P8c7/I63M6/J69uDx8DbShdawP2vwXLfKr8oWnqNvZWRCHj8OdhpmV8UuSZvULIHGfDntJq0TnDoO4Emva4r4lnrBKO17wwa2M9qfxpNzLSrjX1n0KBvh/zgHq4S9ixMXNvBaS3N2yc48Z1DLfdkW17yCMNO8OAOuqNU2/xWpe8c6mTTirBTtbUH7yy7eFP4zqFWOa56MIV6kQPzziCxhV6MrqtfvVy9iuvYd6w/UreUmCvpwHewP5DX1dRH1RPXoe/oLrNjTYKnjOQbfIMvqb1JHI4iI3nUePQd76XMk8TptSzE/vdiLKUb3xFfqLczE4wHcmlZKrlRjnyHfBn7JPGegKjeJioWN9yrsmcLtZjZWAmm78Mi744aGne4yvOp71ScBlao88+9bqmPFZk8G5ZqEdmCfHdnd2aYfxcRsXgmA3lT7qzDQyxJl1aU5/aDWFqUzPBu4Mqwm/hMxck+SYy/Fwsx8YySZpe5jsPhbZKltUnoMeoTbWe0EeeqcGQYXOvCOkksRINM/yU2XucHV+M0uEf4ZIW4f+r/tclEhn2jaJs69tBuaGdDexeU4Zb65ci4vW/Xscfcd0aGhu71XJY0ZtF2ME/8URzaOprVJ3iaaGKWro0SZq3EYXIxDW8nbOrPGxOtULKkKdQsPZsFWY7aO720kUuLucEHty/YKrqiZwf1pl8mRoZBPjXpviHDrVppVwu5skbHG+hDyYhthdI7p68qFb/ufIffRlVv+0tPPWtXsVH/BP/5811S/z0+z/Sy9NFYmVa+o2+n87brVhnLiWcXbb+AODuM5Mpq/L3mRhl9KPlO3/uO7hrE0lKIdefjY+LtEyVBaWz4qe/orkF8hzL7TjdQtDXT2/zd5Bd8WrPoRdur2ZXxHdxV6J22vfkN33dw15BN47PVRqX7WLt+8x0dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPzX/gDmNyLy//BPSQAAAABJRU5ErkJggg=="
					alt=""
				/>
			</div>

			<Nav className="justify-content-center" activeKey="/home">
				<div className="navbar-links">
					<div>
					{/* 	<img className="logo"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJib6cJD5YgqZdWB3e2w-hYlxfOahnSyoeg3W2zJL0_ARH7Ee0&s"
							alt=""
						/> */}
					</div>
					<Dropdown>
						<Dropdown.Toggle className="btn-category"
						>
							Women
						</Dropdown.Toggle>

						<Dropdown.Menu>
						
							{props.category &&
								props.category.map((category) => {
									return (
										<Dropdown.Item>
											<LinkContainer to="/products">
											<Nav key={category.id} 
											onClick={() => props.getProductsByCategory(category.id)}>{category.name} </Nav>
											</LinkContainer>
										</Dropdown.Item>
									);
								})}
						
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown>
						<Dropdown.Toggle  className="btn-category"
						>
							Men
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item>
								<LinkContainer to="/category">
									<Nav>Shoes</Nav>
								</LinkContainer>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<LinkContainer to="/products">
						<Nav className="navbar-links"  active>
							All products
						</Nav>
					</LinkContainer>
					<Nav.Item>
						<LinkContainer to="/products">
							<Nav className="navbar-links" active>
								Sale
							</Nav>
						</LinkContainer>
					</Nav.Item>
				</div>

				<div className="search-form">
					<Form inline style={{ marginRight: '1px' }}>
						<FormControl type="text" placeholder="Search" className="form-control mr-sm-1" />
						<Button className="button-search-bar" variant="primary outline-danger">
							Search
						</Button>
					</Form>
				</div>
				<div className="icons">
					<LinkContainer style={{ padding: '5px' }} to="/wish-list">
						<Nav className="icon" active>
							<IoIosHeart />
						</Nav>
					</LinkContainer>
					<LinkContainer style={{ padding: '5px' }} to="/shopping-cart">
						<Nav className="icon" active>
							<IoMdCart />
						</Nav>
					</LinkContainer>
					<LinkContainer style={{ padding: '5px' }} to="/login">
						<Nav className="links" active>
							<IoIosPerson />
						</Nav>
					</LinkContainer>
				</div>
			</Nav>
		</div>
	);
}

export default connect(null, { getProductsByCategory })(NavBar);
