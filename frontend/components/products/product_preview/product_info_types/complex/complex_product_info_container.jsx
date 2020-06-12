import { connect } from 'react-redux';
import ComplexProductInfo from './complex_product_info';

import { fetchShopByProductId } from '../../../../../actions/newest_shop_actions';

const msp = (state, ownProps) => ({
  shop: state.entities.shops[ownProps.product.shop_id],
  product: ownProps.product
})

const mdp = (dispatch) => ({
  fetchShopByProductId: (productId) => dispatch(fetchShopByProductId(productId))
})

export default connect(msp, mdp)(ComplexProductInfo);