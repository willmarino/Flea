import React from 'react';
import CategoryRowContainer from '../row/category_row_container';
import IndexRow from '../row/index_row';
import Advert from '../../segments/advert';
import Info from '../../segments/info';
import ReviewSegmentContainer from '../../segments/reviews_segment_container';
import TrendingItemsContainer from '../../segments/trending_items_container';

class AnonHome extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    let { products, fetchIndex} = this.props;
    if(!products.indexIds){
      fetchIndex();
    }
  }

  render(){
    let { products, tags, categories } = this.props;
    if(!products.indexIds){
      return <p>lacking products</p>
    }
    let rowOneProduct = products[products.indexIds[0][0]];
    let rowTwoProduct = products[products.indexIds[1][0]];
    let rowThreeProduct = products[products.indexIds[2][0]];
    let rowOneCategory = categories[rowOneProduct.high_level_category].name;
    let rowTwoCategory = categories[rowTwoProduct.high_level_category].name;
    let rowThreeCategory = categories[rowThreeProduct.high_level_category].name;
    return(
      <div>
        <Advert/>
        <ul>
          <IndexRow 
            // type
            products={products.indexIds[0].map((id) => products[id])}
            category={rowOneCategory}/>
        </ul>
        <ul>
          <IndexRow
            // type
            products={products.indexIds[1].map((id) => products[id])}
            category={rowTwoCategory}/>
        </ul>
        <ul>
          <IndexRow
            // type
            products={products.indexIds[2].map((id) => products[id])}
            category={rowThreeCategory}/>
        </ul>
        <ul>
          <CategoryRowContainer
            products={this.props.products}
            categories={this.props.categories}/>
        </ul>
        <Info/>
        <ReviewSegmentContainer/>
        <TrendingItemsContainer/>
      </div>
    )
  }
}

export default AnonHome;