import React, { useRef, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactLoading from 'react-loading';
import '../../assets/css/contact.css';
import * as ROUTES from '../constants/routes';

const Contact = () => {
	const form = useRef();
	const [isFetching, setIsFetching] = useState(true);
	let navigate = useNavigate();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_ct07nbo',
				'template_5yt34fh',
				form.current,
				'jiwXLoEH2nHnymr2F'
			)
			.then(
				(result) => {
					navigate(ROUTES.C_THANK_YOU);
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	useEffect(() => {
		setTimeout(function () {
			console.log('Delayed for 2 second.');
			setIsFetching(false);
		}, 2000);
	}, [isFetching]);
	if (isFetching) {
		<ReactLoading
			type={'bars'}
			color={'#03fc4e'}
			height={100}
			width={100}
		/>;
	}
	return (
		<>
			<Helmet>
				<title>Designing Yesterday : Contact</title>
				<meta charset='utf-8' />
				<meta
					http-equiv='X-UA-Compatible'
					content='IE=edge'
				/>
				<meta
					name='csrf_token'
					content=''
				/>
				<meta
					property='type'
					content='website'
				/>
			</Helmet>
			<Container>
				<br />
				<br />
				<div class='container'>
					<div class='row'>
						<div class='col align-self-center'>
							<div class='sec-title'>
								<div class='title'>Contact Me</div>
								<p>
									Use this form to get in contact with Grant Watson if you need
									to get your business online, you need software updated and
									modified, or want to send a funny joke.
								</p>
							</div>
							{/* <!-- contact form --> */}
							<form
								class='form'
								ref={form}
								onSubmit={sendEmail}
							>
								{/* <!-- name --> */}
								<div class='form-group'>
									<label for='fromName'>Name</label>
									<input
										type='name'
										name='fromName'
										class='form-control'
										id='fromName'
										placeholder='Enter your name'
									/>
								</div>

								{/* <!-- email --> */}
								<div class='form-group'>
									<label for='email'>Email address</label>
									<input
										type='email'
										name='email'
										class='form-control'
										id='email'
										placeholder='Enter your email'
									/>
								</div>

								<div class='form-group'>
									<label for='email_body'>Message</label>
									<textarea
										class='form-control'
										id='message'
										rows='5'
									></textarea>
								</div>
								<hr />
								<button
									type='submit'
									class='btn btn-primary'
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Contact;
