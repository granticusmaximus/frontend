import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../utils/client.js';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function AllProducts() {
	const [allProductsData, setAllProducts] = useState([]);
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "product"]{
            name,
            slug,
            description,
            publishedAt,
            price,
            image{
              asset->{
                _id,
                url
              }
            }
          } | order(publishedAt desc)`
			)

			.then((res) => {
				setAllProducts(res); // Update the state with the fetched data
			})
			.catch(console.error);
	}, []);

	return (
		<>
			<br />
			<br />
			<Helmet>
				<title>Designing Yesterday Shop</title>
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
				<meta
					property='og:title'
					content='Designing Yesterday Shop'
				/>
			</Helmet>
			<Container>
				<div className='shopHeader'>
					<div className='container'>
						<h1
							className='flex justify-center cursive'
							style={{
								fontFamily: 'Brush Script MT',
							}}
						>
							Designing Yesterday Shop
						</h1>
						<h3
							className='shopByLine flex justify-center'
							style={{
								fontFamily: 'Brush Script MT',
							}}
						>
							Welcome to my shop!
						</h3>
						<div className='grid-container'>
							{allProductsData.length > 0 ? ( // Check if data is available
								allProductsData.map((item, index) => (
									<div>
										<Link
											to={'/' + item.slug.current}
											key={item.slug.current}
										>
											<Card className='mb-4'>
												<Card.Img
													variant='top'
													src={item.image.asset.url}
												/>
												<Card.Body>
													<Card.Title>{item.name}</Card.Title>
													<Card.Text>Price: {item.price}</Card.Text>
												</Card.Body>
											</Card>
										</Link>
										<br />
										<br />
									</div>
								))
							) : (
								<p>Loading...</p> // Display a loading message while data is being fetched
							)}
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
