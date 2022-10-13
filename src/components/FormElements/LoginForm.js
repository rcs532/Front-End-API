import React, { useState } from "react";
import {
	MDBContainer,
	MDBCol,
	MDBRow,
	MDBBtn,
	MDBIcon,
	MDBInput,
	MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const LoginForm = (props) => {
	const { handleLogin } = props;

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<MDBContainer fluid className="p-3 my-5 h-custom">
			<MDBRow>
				<MDBCol col="10" md="6">
					<img
						src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
						class="img-fluid"
						alt="Sample image"
					/>
				</MDBCol>

				<MDBCol col="4" md="6">
					<MDBInput
						wrapperClass="mb-4"
						label="Email address"
						id="formControlLg"
						type="email"
						size="lg"
					/>
					<MDBInput
						wrapperClass="mb-4"
						label="Password"
						id="formControlLg"
						type="password"
						size="lg"
					/>

					<div className="d-flex justify-content-between mb-4">
						<Link to="/forgotPassword">Forgot Password?</Link>
					</div>

					<div className="text-center text-md-start mt-4 pt-2">
						<MDBBtn className="mb-0 px-5" size="lg" onClick={handleLogin}>
							Login
						</MDBBtn>
						<p className="medium fw-bold mt-2 pt-1 mb-2">
							<Link to="/register">Registrarse</Link>
						</p>
					</div>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default LoginForm;
