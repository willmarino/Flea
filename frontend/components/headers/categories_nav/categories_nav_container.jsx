import { connect } from 'react-redux';
import CategoriesNav from './categories_nav';
import { fetchAllCategories } from '../../../actions/newest_categories_actions';

const msp = (state) => ({
  categories: state.entities.categories
});

const mdp = (dispatch) => ({
  fetchAllCategories: () => dispatch(fetchAllCategories())
});

export default connect(msp, mdp)(CategoriesNav);