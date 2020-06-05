import { connect } from 'react-redux';
import OpenLoginModalButton from './open_login_modal_button';
import { openModal } from '../../../../../actions/modal_actions';

const mdp = (dispatch) => ({
  openModal: (dash) => dispatch(openModal(dash))
});

export default connect(null, mdp)(OpenLoginModalButton);