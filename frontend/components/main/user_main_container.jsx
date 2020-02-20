import { connect } from 'react-redux';
import UserMain from './user_main';

const msp = (state, ownProps) => {
  return({
    curPath : ownProps.match.path
  })
}

export default connect(msp, null)(UserMain);