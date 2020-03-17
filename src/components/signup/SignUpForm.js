import React from 'react';
import { Form, Button } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

export default function SignUpForm(props) {
	return (	
		<div className="login-page">
		<div className="login-content login-form hybrid-login-form hybrid-login-form-signup">
			<div className="login-form">
				<Form className="login-form" onSubmit={props.onSubmit}>
					<h1 style={{ padding: "7px", color: "#3D72A4", fontFamily: "'Anton', sans-serif " }} className="text-center">
						Create account
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
						style={{ fontFamily: "'Anton', sans-serif", height: '35px', padding: '2.5px' }}
						type="Submit"
						className="btn-lg btn-dark btn-block"
					>
						Create your account
					</Button>
					<Form.Text className="text-center" />
				</Form>
			</div>
		</div>
		</div>
	);
}
