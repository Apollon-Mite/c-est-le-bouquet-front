import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchProducts } from '../actions/productActions';
import { fetchProducers } from '../actions/sellerActions';
import { setLoading, setLocationHome } from '../actions/displayActions';

const mapState = (state) => {
  const {
    loading,
  } = state.display;

  return {
    loading,
  };
};
const mapDispatchToProps = (dispatch) => ({
  init: () => {
    // dispatch(setLoading(true));
    dispatch(fetchProducts());
    dispatch(fetchProducers());
  },
  setLocationHome: (value) => dispatch(setLocationHome(value)),
});

export default connect(mapState, mapDispatchToProps)(App);
