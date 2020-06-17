import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchTag from './search_tag';
import { createSearch } from '../../../actions/newest_search_actions';

const msp = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  tag: ownProps.tag
})

const mdp = (dispatch) => ({
  createSearch: (query) => dispatch(createSearch(query))
})

export default withRouter(connect(msp, mdp)(SearchTag));
