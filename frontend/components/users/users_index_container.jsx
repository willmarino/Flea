import { connect } from 'react-redux';
import UsersIndex from './users_index';
import { fetchUsers } from '../../actions/users_actions';


const msp = (state) => ({
  users: Object.values(state.entities.users),
  currentUser: state.session.currentUser
});

const mdp = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  msp,
  mdp
)(UsersIndex);