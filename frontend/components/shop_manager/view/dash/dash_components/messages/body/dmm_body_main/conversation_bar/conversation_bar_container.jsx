import { connect } from 'react-redux';
import ConversationBar from './conversation_bar';
import { fetchUserById } from '../../../../../../../../../actions/users_actions';

const msp = (state, ownProps) => ({
  users: state.entities.users,
  conversation: ownProps.conversation,
  currentUserId: state.session.currentUser.id
})

const mdp = (dispatch) => ({
  fetchUserById: (id) => dispatch(fetchUserById(id))
})

export default connect(msp, mdp)(ConversationBar);