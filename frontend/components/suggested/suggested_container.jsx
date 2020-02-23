import { connect } from 'react-redux';
import Suggested from './suggested';
import { fetchSearchMain } from '../../actions/search_actions';

// suggestedSearches will be the only real content of this component
const msp = state => ({
  suggestedSearches : state.search.suggestedSearchTags,
  currentUser : state.session.currentUser
})
// a click on one of the suggested searches will need to generate a search based on that tag
const mdp = dispatch => ({
  fetchSearchMain : (query) => dispatch(fetchSearchMain(query))
})

export default connect(msp, mdp)(Suggested)