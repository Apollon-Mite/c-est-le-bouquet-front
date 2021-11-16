// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// == Import
import ScrollToTop from 'src/functions/scrollToTop';
import SignupFormCustomer from 'src/containers/SignupFormCustomer';
import SignupFormSeller from 'src/containers/SignupFormSeller';
import AccountCreated from 'src/containers/AccountCreated';
import SingleProduct from 'src/containers/SingleProduct';
import Products from 'src/containers/Products';
import SellerPage from 'src/containers/SellerPage';
import Cart from 'src/containers/Cart';
import OurProducers from 'src/containers/OurProducers';
import OrderPass from 'src/containers/OrderPass';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Article from 'src/components/Article';
import NavBar from 'src/containers/NavBar';
import NotFound from 'src/components/NotFound';
import AboutUs from 'src/components/AboutUs';
import Dashboard from 'src/containers/Dashboard';
import OrderProducts from 'src/containers/OrderProducts/';
import Spinner from './Spinner';

// == Import
import './styles.scss';

const App = ({ init, loading, setLocationHome }) => {
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="app-container">
      <ScrollToTop setLocationHome={setLocationHome} />
      <NavBar />
      {
        (loading) && <Spinner />
      }

      {
        !loading && (
        <Switch>
          <Route exact key="/" path="/">
            <Header />
            <Article />
          </Route>
          <Route exact key="/inscription/client" path="/inscription/client">
            <SignupFormCustomer />
          </Route>
          <Route exact key="/inscription/pro" path="/inscription/pro">
            <SignupFormSeller />
          </Route>
          <Route exact key="/bienvenue" path="/bienvenue">
            <AccountCreated />
          </Route>
          <Route exact path="/nos-fleurs">
            <Products />
          </Route>
          <Route path="/product/:id" exact>
            <SingleProduct />
          </Route>
          <Route path="/nos-producteurs" exact>
            <OurProducers />
          </Route>
          <Route path="/nos-producteurs/:sellerId" exact>
            <SellerPage />
          </Route>
          <Route path="/mon-espace" exact>
            <Dashboard />
          </Route>
          <Route path="/order/:orderId" exact>
            <OrderProducts />
          </Route>
          <Route path="/panier" exact>
            <Cart />
          </Route>
          <Route path="/qui-sommes-nous" exact>
            <AboutUs />
          </Route>
          <Route path="/récapitulatif" exact>
            <OrderPass />
          </Route>
          <NotFound />
        </Switch>
        )
      }
      <Footer />

    </div>
  );
};
App.propTypes = {
  loading: PropTypes.bool.isRequired,
  init: PropTypes.func.isRequired,
  setLocationHome: PropTypes.func.isRequired,
};
// == Export
export default App;
