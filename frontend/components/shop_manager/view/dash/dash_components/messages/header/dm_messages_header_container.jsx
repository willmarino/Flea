import { connect } from 'react-redux';
import DMMessagesHeader from './dm_messages_header';
import { openModal } from '../../../../../../../actions/modal_actions';

const msp = (state) => ({

})

const mdp = (dispatch) => ({
  openModal: (status) => dispatch(openModal(status))
})

export default connect(msp, mdp)(DMMessagesHeader);