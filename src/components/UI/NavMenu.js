import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as ROUTES from '../constants/routes';
import { Dna } from 'react-loader-spinner';

const NavMenu = (props) => {
	return (
		<>
			{[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
				<Navbar
					key={expand}
					fixed='top'
					expand='lg'
					expand={expand}
					className='mb-3'
					style={{
						maxHeight: '75px',
						backgroundColor: 'grey',
						borderBottom: '3px solid #000',
					}}
				>
					<Navbar.Brand
						href={ROUTES.HOME}
						style={{
							color: 'white',
						}}
					></Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-${expand}`}
						aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
						placement='end'
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
								Designing Yesterday
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className='justify-content-end flex-grow-1 pe-3'>
								<Nav.Link
									style={{ color: 'white' }}
									href={ROUTES.HOME}
								>
									Home
								</Nav.Link>
								<Nav.Link
									style={{ color: 'white' }}
									href={ROUTES.ABOUT}
								>
									About
								</Nav.Link>
								<Nav.Link
									style={{ color: 'white' }}
									href={ROUTES.CONTACT}
								>
									Contact
								</Nav.Link>
								<Nav.Link
									style={{ color: 'white' }}
									href={ROUTES.SHOP}
								>
									Shop
								</Nav.Link>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Navbar>
			))}
		</>
	);
};

export default NavMenu;
