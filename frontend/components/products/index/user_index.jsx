import React from 'react';
import SuggestedContainer from '../../suggested/suggested_container';
import RecentlyViewed from '../row/recently_viewed';
import IndexRow from '../row/index_row';
import Info from '../../segments/info';
import Footer from '../../segments/footer';

class UserIndex extends React.Component{
  constructor(props){
    super(props)

  }

  componentDidMount(){
    if(!this.allPresent()){
      this.props.fetchIndex();
      this.props.fetchSuggestedTags();
      this.props.fetchRecentlyViewedProducts(6);
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
    debugger;
    return(
      <div>
        <SuggestedContainer
          suggestedSearches={tags.suggestedIds.map((id) => tags[id])}/>
        <ul className="primary-index">
          <RecentlyViewed
            products={products.recentlyViewedIds.map((id) => products[id])}
            loggedIn={this.props.loggedIn}
            limit={6}/>
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