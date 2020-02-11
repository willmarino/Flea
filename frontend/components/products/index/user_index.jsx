import React from 'react';
import IndexRowContainer from '../row/index_row_container';
import CategoryRowContainer from '../row/category_row_container';
import Advert from '../../segments/advert';
import Info from '../../segments/info';
import ReviewSegmentContainer from '../../segments/reviews_segment_container';
import Footer from '../../segments/footer';

class UserIndex extends React.Component{
  constructor(props){
    super(props)

    this.allPresent = this.allPresent.bind(this);
  }

  componentDidMount(){
    if(!this.allPresent()){
      this.props.fetchIndex();
      this.props.fetchUserCart(this.props.user.id);
    }
  }

  allPresent(){
    if(this.props.index &&
      this.props.categories &&
      this.props.cart
      ){
        return true;
      }
    return false;
  }

  render(){
    if(!this.props.products.index){
      return <p></p>;
    }
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
          <CategoryRowContainer/>
        </ul>
        <Info/>
        {/* <ReviewSegmentContainer/> */}
        <Footer/>
      </div>
    )
  }
}

export default UserIndex;