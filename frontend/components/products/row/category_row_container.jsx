import { connect } from 'react-redux';
import CategoryRow from './category_row';

const msp = state => ({
    productsArr: Object.values(state.entities.products)
});

export default connect(msp, null)(CategoryRow);