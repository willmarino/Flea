import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Suggested from './suggested';
import { createSearch } from '../../actions/newest_search_actions'

// suggestedSearches will be the only real content of this component
const msp = ( state, ownProps ) => ({
  suggestedSearches : ownProps.suggestedSearches,
  currentUser : state.session.currentUser
})
// a click on one of the suggested searches will need to generate a search based on that tag
const mdp = dispatch => ({
  createSearch : (query) => dispatch(createSearch(query))
})

export default withRouter(connect(msp, mdp)(Suggested));