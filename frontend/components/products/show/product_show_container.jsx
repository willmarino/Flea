import { connect } from 'react-redux';
import ProductShow from './product_show';
import { fetchProductShow } from '../../../actions/newest_product_actions';
import { addView } from '../../../actions/view_actions';

const msp = (state, ownProps) => {
    let curProdId = ownProps.match.params.prodId;
    return({
        products: state.entities.products,
        shops: state.entities.shops,
        reviews: state.entities.reviews,
        users: state.entities.users,
        curPath: ownProps.location.pathname,
        curProdId: curProdId,
        loggedIn: Boolean(state.session.currentUser),
        user: state.session.currentUser
    })
}

const mdp = dispatch => ({
    fetchProductShow: (id) => dispatch(fetchProductShow(id)),
    addView : (id) => dispatch(addView(id))
});


export default connect(msp, mdp)(ProductShow);