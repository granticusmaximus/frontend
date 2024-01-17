import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default class About extends Component {
	render() {
		return (
			<>
				<br />
				<br />
				<Container>
					<Row>
						<Col md={6}>
							<Image
								src='https://via.placeholder.com/300'
								alt='Placeholder Image'
							/>
						</Col>
						<Col md={6}>
							<h1>About Us</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
								vel magna vitae tellus euismod fermentum. Sed ut posuere urna.
							</p>
							<p>
								Integer lacinia, justo a tristique suscipit, nisi velit
								vulputate lorem, id efficitur urna nunc vel augue.
							</p>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}
