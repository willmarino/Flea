import React from 'react';
import IndexRowContainer from '../row/index_row_container';
import CategoryRowContainer from '../row/category_row_container';
import Advert from '../../segments/advert';
import Info from '../../segments/info';
import ReviewSegmentContainer from '../../segments/reviews_segment_container';
import Footer from '../../segments/footer';

class AnonIndex extends React.Component{
  constructor(props){
    super(props)

    this.allPresent = this.allPresent.bind(this);
  }

  componentDidMount(){
    if(!this.allPresent()){
      this.props.fetchIndex();
      this.props.fetchProductCategories();
    }
  }

  allPresent(){
    if((Object.keys(this.props.products).length !== 0) && (Object.keys(this.props.categories).length !== 0)){
      return true;
    }
    return false;
  }

  render(){
    if(Object.values(this.props.products).length === 0 ||
      !this.props.indexCategories ||
      !this.props.catRowCategories){
      return <p></p>;
    }
    debugger;
    return(
      <div>
        <Advert/>
        <ul className='primary-index'>
          <IndexRowContainer type='simple' rowId={0}/>
        </ul>
        <ul className='primary-index'>
          <IndexRowContainer type='simple' rowId={1}/>
        </ul>
        <ul className='primary-index'>
          <IndexRowContainer type='simple' rowId={2}/>
        </ul>
        <ul className='primary-index' id='cat-row'>
          <CategoryRowContainer categories={this.props.catRowCategories}/>
        </ul>
        <Info/>
        <ReviewSegmentContainer/>
        <Footer/>
      </div>
    )
  }
}

export default AnonIndex;