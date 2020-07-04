import React from 'react';
import { CSSTransition } from 'react-transition-group';
import DefaultSpinner from '../../../../loading_spinners/default_spinner';
import ProductIndex from '../../../../products/index/product_index';
import SuggestedContainer from '../../../../suggested/suggested_container';
import RecentlyViewed from '../../../../products/row/recently_viewed';
import Info from '../../../../segments/info';
import ReviewSegmentContainer from '../../../../segments/reviews_segment_container';
import TrendingItemsContainer from '../../../../segments/trending_items_container';

class UserHome extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mounted: false
    }
  }

  componentDidMount(){
    let { products, fetchIndex, fetchSuggestedTags, fetchRecentlyViewedProducts} = this.props;
    this.setState({ mounted: true })
    if(!products.indexIds || !this.props.tags.suggestedIds || !this.props.products.recentlyViewedIds){
      fetchIndex();
      fetchSuggestedTags();
      fetchRecentlyViewedProducts(6);
    }
  }

  render(){
    debugger;
    let { products, categories, loggedIn, tags } = this.props;
    if(!products.indexIds || !this.props.tags.suggestedIds || !this.props.products.recentlyViewedIds){
      return <DefaultSpinner/>
    }
    return(
      <CSSTransition classNames={'fade-shrink'} in={this.state.mounted} timeout={1500} appear={true}>
        <div className="body">
          <SuggestedContainer suggestedSearches={tags.suggestedIds.map((id) => tags[id])}/>
          <RecentlyViewed
            products={products.recentlyViewedIds.map((id) => products[id])}
            loggedIn={this.props.loggedIn}
            limit={6}/>
          <ProductIndex products={products} categories={categories} loggedIn={loggedIn} incrementReadyCount={this.incrementReadyCount}/>
          <Info/>
          <ReviewSegmentContainer incrementReadyCount={this.incrementReadyCount}/>
          <TrendingItemsContainer incrementReadyCount={this.incrementReadyCount}/>
        </div>
      </CSSTransition>
    )
  }
}

export default UserHome;