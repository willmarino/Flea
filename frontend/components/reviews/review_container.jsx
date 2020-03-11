import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Review from './review';

const msp = (state, ownProps) => {
  return({
    review: ownProps.review,
    product: ownProps.product,
    author: ownProps.author,
    key: ownProps.key,
    loggedIn : Boolean(state.session.currentUser)
  })
}

const mdp = dispatch => ({

});

export default withRouter(connect(msp, mdp)(Review));