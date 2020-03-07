import { connect } from 'react-redux';
import CategoryRow from './category_row';

const msp = (state, ownProps) => {
    let products = ownProps.products.catRowIds.map((id) => ownProps.products[id]);
    return ({
        products : products,
        categories : state.entities.categories
    })
};

export default connect(msp, null)(CategoryRow);