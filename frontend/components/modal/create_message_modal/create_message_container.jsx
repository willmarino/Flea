import { connect } from 'react-redux';
import CreateMessage from './create_message';
import { createMessage } from '../../../actions/conversations_actions';

const msp = (state) => ({
})

const mdp = (dispatch) => ({
  createMessage: (info) => dispatch(createMessage(info))
})

export default connect(msp, mdp)(CreateMessage)