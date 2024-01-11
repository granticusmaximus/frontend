import { Row, Card, Container } from 'react-bootstrap';

export default function Home() {
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
