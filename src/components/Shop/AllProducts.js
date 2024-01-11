import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../utils/client.js';
import { Helmet } from 'react-helmet';

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
							allProductsData.map((post, index) => (
								<div>
									<Link
										to={'/' + post.slug.current}
										key={post.slug.current}
									>
										<h2>{post.name}</h2>
										<h3>{post.price}</h3>
										<div key={index}>
											<img
												src={post.image.asset.url}
												alt=''
												style={{
													width: '50%',
													height: '50%',
												}}
											/>
										</div>
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
		</>
	);
}
