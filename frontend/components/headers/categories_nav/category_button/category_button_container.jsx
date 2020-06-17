import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CategoryButton from './category_button';
import { createSearch } from '../../../../actions/newest_search_actions';

const msp = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  category: ownProps.category
})

const mdp = (dispatch) => ({
  createSearch: (query) => dispatch(createSearch(query))
})

export default withRouter(connect(msp, mdp)(CategoryButton));