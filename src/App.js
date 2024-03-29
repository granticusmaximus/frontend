import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './components/constants/routes';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import AllProducts from './components/Shop/AllProducts';
import OneProduct from './components/Shop/OneProduct';
import ContactFormThanks from './components/Pages/ContactFormThanks';
import NavMenu from './components/UI/NavMenu';
import Footer from './components/UI/Footer';

function App() {
	return (
		<div className='page-container'>
			<br />
			<NavMenu />
			<div className='main-content'>
				<Router>
					<Routes>
						<Route
							exact
							path={ROUTES.HOME}
							element={<Home />}
						/>
						<Route
							path={ROUTES.ABOUT}
							element={<About />}
						/>
						<Route
							path={ROUTES.CONTACT}
							element={<Contact />}
						/>
						<Route
							path={ROUTES.SHOP}
							element={<AllProducts />}
						/>
						<Route
							path={ROUTES.SINGLE_PRODUCT}
							element={<OneProduct />}
						/>
						<Route
							path={ROUTES.C_THANK_YOU}
							element={<ContactFormThanks />}
						/>
					</Routes>
				</Router>
			</div>
			<Footer />
		</div>
	);
}

export default App;
