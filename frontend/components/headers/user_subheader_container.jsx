import { connect } from 'react-redux';
import UserSubheader from './user_subheader';

const msp = state => ({
  user: state.entities.users[state.session.currentUser],
  products: state.entities.products
});

const mdp = dispatch => ({

});


export default connect(msp, mdp)(UserSubheader);