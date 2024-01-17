import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer className='bg-dark text-white py-4 mt-auto'>
			{/* Add "mt-auto" class to push footer to the bottom */}
			<Container>
				<Row>
					<Col md={6}>
						<h3>Contact Us</h3>
						<p>
							Address: 123 Main Street, City, State ZIP
							<br />
							Email: contact@example.com
							<br />
							Phone: (123) 456-7890
						</p>
					</Col>
					<Col md={6}>
						<h3>Links</h3>
						<ul className='list-unstyled'>
							<li>
								<a href='/'>Home</a>
							</li>
							<li>
								<a href='/about'>About Us</a>
							</li>
							<li>
								<a href='/contact'>Contact</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
