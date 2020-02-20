import { connect } from 'react-redux';
import UserMain from './user_main';
import { fetchAllCategories } from '../../actions/category_actions';

const msp = (state, ownProps) => {
  return({
    curPath : ownProps.match.path,
    categories : state.newcategories
  })
}

const mdp = (dispatch) => ({
  fetchAllCategories : () => dispatch(fetchAllCategories())
})

export default connect(msp, mdp)(UserMain);