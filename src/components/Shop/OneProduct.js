import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../../utils/client.js';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Container } from 'react-bootstrap';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

export default function OnePost() {
	let navigate = useNavigate();
	const [productData, setProductData] = useState(null);
	const { slug } = useParams();

	const goBackToList = (e) => {
		e.preventDefault();
		navigate = '/shop';
	};

	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == "${slug}"]{
            name,
            price,
            slug,
            publishedAt,
            image{
              asset->{
                _id,
                url
              }
            },
            description
          }`
			)
			.then((data) => setProductData(data[0]))
			.catch(console.error);
	}, [slug]);

	if (!productData) return <div>Loading...</div>;

	return (
		<>
			<br />
			<br />
			<Helmet>
				<title>GWS Post: {productData.name}</title>
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
					content={productData.name}
				/>
				<meta
					property='og:content'
					content={productData.description}
				/>
				<meta
					property='og:image'
					content={productData.image}
					data-react-helmet='true'
				/>
				<meta
					property='og:image:secure_url'
					content={productData.image}
					data-react-helmet='true'
				/>
			</Helmet>
			<br />
			<br />
			<br />
			<Container>
				<div className='relative'>
					<div className='absolute flex items-center justify-center'>
						{/* Title Section */}
						<div className='product-name'>
							<center></center>
						</div>
					</div>
					<Row>
						<Col>
							<img
								className='w-full object-cover rounded-t'
								src={urlFor(productData.image).url()}
								alt=''
								style={{ height: '400px' }}
							/>
						</Col>
						<Col>
							<Row>
								<h2>{productData.name}</h2>
								<p>
									Price:
									<div>
										<h4 className='cursive'>{productData.price}</h4>
									</div>
								</p>{' '}
								Description:
								<div>
									<h4 className='cursive'>{productData.description}</h4>
								</div>
							</Row>
						</Col>
					</Row>
				</div>
				<center>
					<a
						href='/shop'
						className='btn btn-warning'
					>
						Back to All Products
					</a>
				</center>
				<div className='fullWidth-description'>
					<BlockContent
						blocks={productData.description}
						projectId={sanityClient.projectId}
						dataset={sanityClient.dataset}
					/>
				</div>
			</Container>
		</>
	);
}
