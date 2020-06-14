import React from 'react';
import { CSSTransition } from 'react-transition-group';
import DefaultSpinner from '../../../../loading_spinners/default_spinner';
import ProductIndex from '../../../../products/index/product_index';
import Advert from '../../../../segments/advert';
import Info from '../../../../segments/info';
import ReviewSegmentContainer from '../../../../segments/reviews_segment_container';
import TrendingItemsContainer from '../../../../segments/trending_items_container';

class AnonHome extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mounted: false
    }
  }

  componentDidMount(){
    let { products, fetchIndex} = this.props;
    this.setState({ mounted: true })
    if(!products.indexIds){
      fetchIndex();
    }
  }

  render(){
    let { products, categories, loggedIn } = this.props;
    if(!products.indexIds){
      return <DefaultSpinner/>
    }
    return(
      <CSSTransition classNames={'fade-shrink'} in={this.state.mounted} timeout={1500} appear={true}>
        <div className="body">
          <Advert/>
          <ProductIndex products={products} categories={categories} loggedIn={loggedIn} incrementReadyCount={this.incrementReadyCount}/>
          <Info/>
          <ReviewSegmentContainer incrementReadyCount={this.incrementReadyCount}/>
          <TrendingItemsContainer incrementReadyCount={this.incrementReadyCount}/>
        </div>
      </CSSTransition>
    )
  }
}

export default AnonHome;