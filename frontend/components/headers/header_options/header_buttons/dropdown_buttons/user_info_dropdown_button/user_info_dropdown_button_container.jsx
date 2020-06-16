import { connect } from 'react-redux';
import UserInfoDropdownButton from './user_info_dropdown_button';
import { logoutUser } from '../../../../../../actions/session_actions';
import { fetchUserById } from '../../../../../../actions/users_actions';

const msp = (state) => ({
  user: state.session.currentUser
});

const mdp = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  fetchUserById: (id) => dispatch(fetchUserById(id))
})

export default connect(msp, mdp)(UserInfoDropdownButton);