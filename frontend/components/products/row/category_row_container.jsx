import { connect } from 'react-redux';
import CategoryRow from './category_row';

import { productCategories } from '../../../actions/product_actions';

const msp = state => ({
    productsArr: Object.values(state.entities.products)
});

const mdp = dispatch => ({
    productCategories: () => dispatch(productCategories())
});

export default connect(msp, mdp)(CategoryRow);