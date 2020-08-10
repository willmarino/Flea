import { connect } from 'react-redux';
import MainModal from './main_modal';
import { closeModal } from '../../actions/modal_actions';

const msp = state => ({
  modalStatus: state.ui.modal
});

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(MainModal);
