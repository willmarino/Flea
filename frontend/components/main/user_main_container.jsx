import { connect } from 'react-redux';
import UserMain from './user_main';

const msp = (state, ownProps) => {
  return({
    curPath : ownProps.match.path
  })
}

const mdp = (dispatch) => ({
})

export default connect(msp, mdp)(UserMain);