import { connect } from 'react-redux';
import DMMBMMessageDisplay from './dmmbm_message_display';
import { fetchConversations } from '../../../../../../../../actions/conversations_actions';

const msp = (state) => ({
  conversations: state.entities.conversations,
  currentUser: state.session.currentUser
})

const mdp = (dispatch) => ({
  fetchConversations: (userId) => dispatch(fetchConversations(userId))
})

export default connect(msp, mdp)(DMMBMMessageDisplay)