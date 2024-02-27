import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Card, Form, FormGroup, Col, Label, Button, Row, CardBody} from 'reactstrap';
import AppLayout from "@/components/Layouts/AppLayout";


const schema = Yup.object().shape({
    
		title: Yup.string().required('Title is required').strict(true),
    	firstName: Yup.string().required('First Name is required'),
    	lastName: Yup.string().required('Last name is required'),
    	dob: Yup.string().required('Date of Birth is required').matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'), 
		email: Yup.string().required('Email is required').email('Email is invalid'),
    	password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    	confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    	acceptTerms: Yup.bool().oneOf([true], 'Accept Ts & Cs is required')
});
  
	
const form = () => {
	
	//const formOptions = { resolver: yupResolver(schema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState, watch } = useForm({resolver:yupResolver(schema)});
    const { errors } = formState;
	//console.log(watch())

    function onSubmit(data) {
        // display form data on success
		//console.log(data)
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
		reset();
		return false;
    }

    return (
        <AppLayout>
			<Head>
				<title>Form Validation</title>
			</Head>
			<Container>
				<Row>
					<Col className="col text-center">
						<h1 className="font-semibold text-xl text-gray justify-center"> Form Validation </h1>
					</Col>
				</Row>
				<Card width="50%">
					<CardBody>
						<Form onSubmit={handleSubmit(onSubmit)}>
							<FormGroup row>
								<Col sm="10" fluid="true">
									<Label>Title</Label>
									<select name="title" type="select"
									{...register('title')} 
									className={`form-control ${errors.title ? "is-invalid" : ""}`}
									>
										<option value=""></option>
										<option value="Mr">Mr</option>
										<option value="Mrs">Mrs</option>
										<option value="Miss">Miss</option>
										<option value="Ms">Ms</option>
									</select>
									<div className="invalid-feedback">
										{errors.firstName?.message}
									</div>
								</Col>
								<Col sm="10">
									<Label>Last Name</Label>
									<input 
										name="lastName" 
										type="text" 
										{...register('lastName')}
										className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
										placeholder="Gomez"	
									/>
									<div className="invalid-feedback">
										{errors.firstName?.message}
									</div>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col sm="10">
									<Label>Date of Birth</Label>
									<input 
										name="dob" 
										type="date" 
										{...register('dob')}
										className={`form-control ${errors.dob ? "is-invalid" : ""}`}
									/>
									<div className="invalid-feedback">
										{errors.dob?.message}
									</div>
								</Col>
								<Col sm="10">
									<Label>Email</Label>
									<input 
										name="email" 
										type="text" 
										{...register('email')}
										className={`form-control ${errors.email ? "is-invalid" : ""}`}
										placeholder="@email"	
									/>
									<div className="invalid-feedback">
										{errors.email?.message}
									</div>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col sm="10">
									<Label>Password</Label>
									<input 
										name="password" 
										type="password"
										{...register('password')}
										className={`form-control ${errors.password ? "is-invalid" : ""}`}
										placeholder=".........."	
									/>
									<div className="invalid-feedback">
										{errors.password?.message}
									</div>
								</Col>
								<Col sm="10">
									<Label>Confirm Password</Label>
									<input 
										name="confirmPassword" 
										type="password"
										{...register('confirmPassword')}
										className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
										placeholder=".........."	
									/>
									<div className="invalid-feedback">
										{errors.confirmPassword?.message}
									</div>
								</Col>
								</FormGroup>
							<Row>
								<Col>
									<FormGroup check>
										<input 
											name="acceptTerms" 
											type="checkbox" 
											{...register('acceptTerms')}
											className={`form-check-input ${errors.acceptTerms ? "is-invalid" : ""}`}
										/>
										<Label htmlFor="acceptTerms" className="form-check-Label">Accept Terms & Conditions</Label>
										<div className="invalid-feedback">
											{errors.acceptTerms?.message}
										</div>
							</FormGroup>
									<Col className="col text-center">
										<Button color="primary" size="sm" type="submit" style={{margingLeft:'5px'}}>Register</Button>
										<Button color="warning" size="sm" type="button" onClick={() => reset()}>Reset</Button>
									</Col>
								</Col>
							</Row>
						</Form>
					</CardBody>
				</Card>
			</Container>
        </AppLayout>
    )

}

export default form;
