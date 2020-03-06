import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import DMListingsHeader from './dm_listings_header';

const msp = (state) => ({
  shops : state.entities.shops
})

const mdp = (dispatch) => ({

})

export default withRouter(connect(msp, null)(DMListingsHeader));