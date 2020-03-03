import React from 'react';
import IndexItem from '../products/index/index_item';

class SearchResultFooter extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      recentsPage : 1,
      associatedPage : 1,
      recentProductsObj: null,
      associatedProductsObj: null
    }
    
    this.recentProductsStructure;
    this.recentsMaxPage;
    this.recentsMinPage = 1;
    this.associatedProductsStructure;
    this.associatedMaxPage;
    this.associatedMinPage = 1;

    this.allPresent = this.allPresent.bind(this);
    this.compileProducts = this.compileProducts.bind(this);
    this.buildStructure = this.buildStructure.bind(this);
    this.incrementRecentsPage = this.incrementRecentsPage.bind(this);
    this.decrementRecentsPage = this.decrementRecentsPage.bind(this);
    this.incrementAssociatedPage = this.incrementAssociatedPage.bind(this);
    this.decrementAssociatedPage = this.decrementAssociatedPage.bind(this);
  }

  componentDidMount(){
    this.props.fetchSearchMainFooter(6);
  }

  componentDidUpdate(prevProps){
    if(prevProps.products.associatedIds !== this.props.products.associatedIds && (this.props.products.associatedIds)){
      this.compileProducts(this.props);
    }else if(prevProps.query !== this.props.query){
      this.props.fetchSearchMainFooter();
    }
  }

  allPresent(props){
    if(props.products.recentlyViewedIds &&
      props.products.associatedIds &&
      props.shops){
        return true;
      }else{
        return false;
      }
  }

  compileProducts(props){
    let { products, shops } = props;
    let recentlyViewedProducts = products.recentlyViewedIds.map((id) => products[id]);
    let associatedProducts = products.associatedIds.map((id) => products[id]);
    
    let recentObj = this.buildStructure(recentlyViewedProducts, shops);
    this.recentsMaxPage = recentObj['pageNum'];
    
    let associatedObj = this.buildStructure(associatedProducts, shops);
    this.associatedMaxPage = associatedObj['pageNum'];


    this.setState({ recentProductsObj : recentObj['obj'], associatedProductsObj : associatedObj['obj'] });

  }

  buildStructure(products, shops){
    let obj = {};
    let subArr = [];
    let pageNum = 1;
    for(let i = 0; i < products.length; i++){
      let p = products[i];
      let shop = shops[p.shop_id];
      subArr.push(
        <IndexItem loggedIn={this.props.loggedIn} product={p} shop={shop} type="complex"/>
      )
      if(subArr.length === 6){
        obj[pageNum] = <ul className="sr-products-list">{subArr}</ul>;
        subArr = [];
        pageNum += 1;
      }
    }

    if(subArr.length !== 0){
      obj[pageNum] = <ul className="sr-products-list">{subArr}</ul>;
      pageNum += 1;
    }

    // returning pageNum as the number of pages of products
    return {obj, pageNum : pageNum - 1};
  }

  incrementRecentsPage(){
    if(this.state.recentsPage + 1 <= this.recentsMaxPage){
      this.setState({ recentsPage : this.state.recentsPage + 1 });
    }
  }

  decrementRecentsPage(){
    if(this.state.recentsPage - 1 >= this.recentsMinPage){
      this.setState({ recentsPage : this.state.recentsPage - 1 });
    }
  }

  incrementAssociatedPage(){
    if(this.state.associatedPage + 1 <= this.associatedMaxPage){
      this.setState({ associatedPage : this.state.associatedPage + 1 });
    }
  }

  decrementAssociatedPage(){
    if(this.state.associatedPage - 1 >= this.associatedMinPage){
      this.setState({ associatedPage : this.state.associatedPage - 1 });
    }
  }



  render(){
    // If I have the right props, and I have organized them into the correct structure, then render
    if(!this.allPresent(this.props) || !this.state.associatedProductsObj){
      return <p>loading</p>;
    }
    return(
      <div className='sr-footer'>
        <div className='sr-footer-recents'>
          <div className='sr-footer-buttons'>
            <p>Page {this.state.recentsPage} of {this.recentsMaxPage}</p>
            <div onClick={this.incrementRecentsPage}>+</div>
            <div onClick={this.decrementRecentsPage}>-</div>
          </div>
          {this.state.recentProductsObj[this.state.recentsPage]}
        </div>
        <div className='sr-footer-associated'>
          <div className='sr-footer-buttons'>
            <p>Page {this.state.associatedPage} of {this.associatedMaxPage}</p>
            <div onClick={this.incrementAssociatedPage}>+</div>
            <div onClick={this.decrementAssociatedPage}>-</div>
          </div>
          {this.state.associatedProductsObj[this.state.associatedPage]}
        </div>
      </div>
    )
  }
}

export default SearchResultFooter;