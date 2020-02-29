import React from 'react';
// import IndexRowContainer from '../row/index_row_container';
// import CategoryRowContainer from '../row/category_row_container';
import IndexRow from '../row/index_row';
import Advert from '../../segments/advert';
import Info from '../../segments/info';
import ReviewSegmentContainer from '../../segments/reviews_segment_container';
import Footer from '../../segments/footer';

class AnonIndex extends React.Component{
  constructor(props){
    super(props)

    // this.allPresent = this.allPresent.bind(this);
  }

  componentDidMount(){
    // if(!this.allPresent()){
    if(!this.props.products.indexIds){
      this.props.fetchIndex();
      // this.props.fetchProductCategories();
    }
  }

  // allPresent(){
  //   if((Object.keys(this.props.products).length !== 0) && (Object.keys(this.props.categories).length !== 0)){
  //     return true;
  //   }
  //   return false;
  // }

  render(){
    // if(Object.values(this.props.products).length === 0 ||
    //   !this.props.indexCategories ||
    //   !this.props.catRowCategories){
    //   return <p></p>;
    // }
    if(!this.props.products.indexIds){
      return <p></p>
    }
    let { products, categories} = this.props;
    return(
      <div>
        <Advert/>
        <ul className='primary-index'>
          <IndexRow 
            type='simple'
            products={products.indexIds[0].map((id) => products[id])}
            category={categories[products.indexIds[0][0].high_level_category]}/>
        </ul>
        <ul className='primary-index'>
          <IndexRow
            type='simple'
            products={products.indexIds[1].map((id) => products[id])}
            category={categories[products.indexIds[1][0].high_level_category]}/>
        </ul>
        <ul className='primary-index'>
          <IndexRow
            type='simple'
            products={products.indexIds[2].map((id) => products[id])}
            category={categories[products.indexIds[2][0].high_level_category]}/>
        </ul>
        {/* <ul className='primary-index' id='cat-row'>
          <CategoryRowContainer categories={this.props.catRowCategories}/>
        </ul> */}
        <Info/>
        <ReviewSegmentContainer/>
        <Footer/>
      </div>
    )
  }
}

export default AnonIndex;

// rowId={0}
// rowId={1}
// rowId={2}