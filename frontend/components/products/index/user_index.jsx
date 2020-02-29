import React from 'react';
// import SuggestedContainer from '../../suggested/suggested_container';
import Suggested from '../../suggested/suggested';
// import RecentlyViewedContainer from '../row/recently_viewed_container';
import RecentlyViewed from '../row/recently_viewed';
// import IndexRowContainer from '../row/index_row_container';
import IndexRow from '../row/index_row';
// import CategoryRowContainer from '../row/category_row_container';
import Info from '../../segments/info';
import Footer from '../../segments/footer';

class UserIndex extends React.Component{
  constructor(props){
    super(props)

    // this.allPresent = this.allPresent.bind(this);
  }

  componentDidMount(){
    if(!this.allPresent()){
      this.props.fetchIndex();
      this.props.fetchSuggestedTags();
      this.props.fetchRecentlyViewedProducts(6);
      // this.props.fetchRecentViews();
      // this.props.fetchSuggestedSearches();
      // this.props.fetchProductCategories();
    }
  }

  allPresent(){
    if(
      this.props.products.indexIds &&
      this.props.tags.suggestedIds &&
      this.props.products.recentlyViewedIds
      ){
        return true;
      }else{
        return false;
      }
  }

  render(){
    // if(Object.values(this.props.products).length === 0 ||
    //   !this.props.catRowCategories ||
    //   !this.props.indexCategories ||
    //   !this.props.suggestedSearches ||
    //   !this.props.recentlyViewedProducts){
    //   return <p></p>;
    // }
    if(!this.allPresent()){
      return <p>loading</p>;
    }
    let { products, tags, user, categories } = this.props;
    let rowOneProduct = products[products.indexIds[0][0]];
    let rowTwoProduct = products[products.indexIds[1][0]];
    let rowThreeProduct = products[products.indexIds[2][0]];
    let rowOneCategory = categories[rowOneProduct.high_level_category].name;
    let rowTwoCategory = categories[rowTwoProduct.high_level_category].name;
    let rowThreeCategory = categories[rowThreeProduct.high_level_category].name;
    return(
      <div>
        <Suggested
          suggestedSearches={tags.suggestedIds.map((id) => tags[id])}
          currentUser={user} />
        <ul className="primary-index">
          <RecentlyViewed
            products={products.recentlyViewedIds.map((id) => products[id])}
            loggedIn={this.props.loggedIn}/>
        </ul>
        <ul className='primary-index'>
          <IndexRow 
            type='simple'
            products={products.indexIds[0].map((id) => products[id])}
            category={rowOneCategory}
            loggedIn={this.props.loggedIn}/>
        </ul>
        <ul className='primary-index'>
          <IndexRow 
            type='simple'
            products={products.indexIds[1].map((id) => products[id])}
            category={rowTwoCategory}
            loggedIn={this.props.loggedIn}/>
        </ul>
        {/* <ul className='primary-index' id='cat-row'>
          <CategoryRowContainer/>
        </ul> */}
        <Info/>
        <Footer/>
      </div>
    )
  }
}

export default UserIndex;