import { connect } from 'react-redux';
import CategoryRow from './category_row';

const msp = state => ({
    products: state.entities.products.categories,
    catRowCategories: state.newcategories.catRow
});

export default connect(msp, null)(CategoryRow);