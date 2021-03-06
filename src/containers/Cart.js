import { connect } from 'react-redux';
import Cart from 'src/components/Cart';
import { toggleAuthModal } from 'src/actions/displayActions';
import { fetchCartProducts, increaseQuantity, decreaseQuantity } from '../actions/productActions';

const mapState = (state) => ({
  cartProducts: state.product.cartProducts,
  loading: state.product.loading,
  isLogged: state.login.isLogged,
  userType: state.login.userType,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCartProducts: () => dispatch(fetchCartProducts()),
  increaseQuantity: (id) => dispatch(increaseQuantity(id)),
  decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
  toggleAuthModal: () => {
    const action = toggleAuthModal();
    dispatch(action);
  },
});

export default connect(mapState, mapDispatchToProps)(Cart);
