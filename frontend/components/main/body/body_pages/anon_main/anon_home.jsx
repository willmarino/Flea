import React from 'react';
import ProductIndex from '../../../../products/index/product_index';
import Advert from '../../../../segments/advert';
import Info from '../../../../segments/info';
import ReviewSegmentContainer from '../../../../segments/reviews_segment_container';
import TrendingItemsContainer from '../../../../segments/trending_items_container';

class AnonHome extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      componentFullyRenderedCountNeeded: 3,
      componentFullyRenderedCount: 0
    }
  }

  componentDidMount(){
    let { products, fetchIndex} = this.props;
    if(!products.indexIds){
      fetchIndex();
    }
  }

  incrementReadyCount(){
    this.setState({ componentFullyRenderedCount: componentFullyRenderedCount + 1 });
  }

  render(){
    let { products, categories, loggedIn } = this.props;
    if(!products.indexIds){
      return <p></p>
    }
    return(
      <div className="body">
        <Advert/>
        <ProductIndex products={products} categories={categories} loggedIn={loggedIn}/>
        <Info/>
        <ReviewSegmentContainer/>
        <TrendingItemsContainer/>
      </div>
    )
  }
}

export default AnonHome;