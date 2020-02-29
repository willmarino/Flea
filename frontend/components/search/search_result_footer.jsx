import React from 'react';
import IndexItem from '../products/index/index_item';

class SearchResultFooter extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      recentsPage : 1,
      associatedPage : 1
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
    this.props.fetchSearchMainFooter();
  }

  shouldComponentUpdate(nextProps, nextState){
    debugger;
    if(this.allPresent(nextProps) && !this.allPresent(this.props)){
      this.compileProducts(nextProps);
      return true;
    }else if(nextState !== this.state){
      return true;
    }else if(nextProps.products.associatedIds !== this.props.products.associatedIds){
      // if(!this.recentProductsStructure && this.allPresent(nextProps)){
      //   debugger;
      //   this.compileProducts(nextProps);
      // }
      return true;
    }
    return false;
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
    this.recentProductsStructure = recentObj['obj'];
    this.recentsMaxPage = recentObj['pageNum'];
    let associatedObj = this.buildStructure(associatedProducts, shops);
    this.associatedProductsStructure = associatedObj['obj'];
    this.associatedMaxPage = associatedObj['pageNum'];
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
      if(subArr.length > 4){
        obj[pageNum] = <ul className="sr-products-list">{subArr}</ul>;
        subArr = [];
        pageNum += 1;
      }
    }
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
    debugger;
    if(!this.allPresent(this.props)){
      return <p>loading</p>
    }
    debugger;
    return(
      <div className='sr-footer'>
        <div className='sr-footer-recents'>
          <div className='sr-footer-buttons'>
            <p>Page {this.state.recentsPage} of {this.recentsMaxPage}</p>
            <div onClick={this.incrementRecentsPage}>+</div>
            <div onClick={this.decrementRecentsPage}>-</div>
          </div>
          {this.recentProductsStructure[this.state.recentsPage]}
        </div>
        <div className='sr-footer-associated'>
          <div className='sr-footer-buttons'>
            <p>Page {this.state.associatedPage} of {this.associatedMaxPage}</p>
            <div onClick={this.incrementAssociatedPage}>+</div>
            <div onClick={this.decrementAssociatedPage}>-</div>
          </div>
          {this.associatedProductsStructure[this.state.associatedPage]}
        </div>
      </div>
    )
  }
}

export default SearchResultFooter;