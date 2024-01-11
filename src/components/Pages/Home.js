import { Row, Card, Container } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import { useState, useEffect } from 'react';

export default function Home() {
	const [isFetching, setIsFetching] = useState(true);
	useEffect(() => {
		setTimeout(function () {
			console.log('Delayed for 5 second.');
			setIsFetching(false);
		}, 5000);
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
			<br />
			<br />
			<Container>
				<h1>Home</h1>
				<Row>
					<Card>
						<Card.Body>
							<Card.Title>This is a home card</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</Card.Text>
						</Card.Body>
					</Card>
				</Row>
			</Container>
		</>
	);
}
