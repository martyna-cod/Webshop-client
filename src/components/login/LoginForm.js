import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LoginForm(props) {
	return (
		<div className="login-page">
			<div className="login-content login-form hybrid-login-form hybrid-login-form-signup">
				<div className="login-form">
					<Form onSubmit={props.onSubmit}>
						<h1
							style={{ padding: '7px', color: '#3D72A4', fontFamily: "'Anton', sans-serif " }}
							className="text-center"
						>
							Sign in{' '}
						</h1>

						<Form.Group controlId="formBasicEmail">
							<Form.Control
								width="100px"
								type="text"
								name="email"
								placeholder="email"
								value={props.values.email}
								onChange={props.onChange}
							/>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Control
								width="100px"
								type="text"
								name="password"
								placeholder="password"
								value={props.values.password}
								onChange={props.onChange}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check
								style={{ fontFamily: "'Anton', sans-serif" }}
								type="checkbox"
								label="Check me out"
							/>
						</Form.Group>
						<Button
							style={{
								backgroundColor: '#E50914',
								fontFamily: "'Anton', sans-serif",
								height: '35px',
								padding: '2.5px'
							}}
							type="Submit"
							className="btn-lg btn-dark btn-block"
						>
							Log in
						</Button>

						<Form.Text style={{ marginTop: '12px', color: 'white' }} className="text-center">
							New to our webshop?
							<Link
								style={{ fontFamily: "'Anton', sans-serif", fontSize: '15px', color: '#3D72A4' }}
								to="/sign-up"
							>
								{' '}
								Sign up now
							</Link>{' '}
							<br />
						</Form.Text>
					</Form>
				</div>
			</div>
		</div>
	);
}
