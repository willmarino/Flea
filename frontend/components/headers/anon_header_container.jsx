import { connect } from 'react-redux';
import AnonHeader from './anon_header';
import { openModal } from '../../actions/modal_actions';


const mdp = dispatch => ({
  openModal: (dash) => dispatch(openModal(dash)),
});

export default connect(null, mdp)(AnonHeader);