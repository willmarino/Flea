import React from 'react';
import SuggestedContainer from '../../suggested/suggested_container';
import RecentlyViewedContainer from '../row/recently_viewed_container';
import IndexRowContainer from '../row/index_row_container';
import CategoryRowContainer from '../row/category_row_container';
import Info from '../../segments/info';
import Footer from '../../segments/footer';

class UserIndex extends React.Component{
  constructor(props){
    super(props)

    this.allPresent = this.allPresent.bind(this);
  }

  componentDidMount(){
    if(!this.allPresent()){
      this.props.fetchIndex();
      this.props.fetchProductCategories();
      this.props.fetchSuggestedSearches();
      this.props.fetchRecentViews();
    }
  }

  allPresent(){
    if(Object.values(this.props.products).length !== 0 &&
      this.props.categories &&
      this.props.suggestedSearches &&
      this.props.recentlyViewedProducts
      ){
        return true;
      }
    return false;
  }

  render(){
    if(Object.values(this.props.products).length === 0 ||
      !this.props.catRowCategories ||
      !this.props.indexCategories ||
      !this.props.suggestedSearches ||
      !this.props.recentlyViewedProducts){
      return <p></p>;
    }
    debugger;
    return(
      <div>
        <SuggestedContainer/>
        <ul className="primary-index">
          <RecentlyViewedContainer/>
        </ul>
        {/* <ul className='primary-index'>
          <IndexRowContainer type='simple' rowId={0}/>
        </ul> */}
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
        <Footer/>
      </div>
    )
  }
}

export default UserIndex;