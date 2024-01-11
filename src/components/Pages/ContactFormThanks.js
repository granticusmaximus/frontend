import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import '../../assets/css/thankyou.css';

class ContactFormThanks extends Component {
	render() {
		return (
			<Container>
				<br />
				<div className='content'>
					<div className='wrapper-1'>
						<div className='wrapper-2'>
							<h1>Thank you !</h1>
							<p>Thanks for sending me a message.</p>
							<p>I will look at it as soon as possible and get back to you.</p>
							<hr />
							<a
								href='/'
								class='go-home'
							>
								go home
							</a>
						</div>
					</div>
				</div>
				<br />
			</Container>
		);
	}
}

export default ContactFormThanks;
