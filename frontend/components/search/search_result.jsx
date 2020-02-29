import React from 'react';
import IndexItem from '../products/index/index_item';
import SearchResultFooterContainer from './search_result_footer_container';

class SearchResult extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {

    }

    this.compileTags = this.compileTags.bind(this);
    this.compileFilters = this.compileFilters.bind(this);
    this.compileProducts = this.compileProducts.bind(this);
    this.compileAll = this.compileAll.bind(this);

    this.tagsList = 'tags';
    this.filtersList = 'filters';
    this.productsList = 'products';
  }

  componentDidMount(){
    this.props.fetchSearchMain(this.props.query);
  }

  shouldComponentUpdate(nextProps){
    if(nextProps.products.searchIds !== this.props.searchIds){
      this.compileAll(nextProps);
      return true;
    }else if(nextProps.query !== this.props.query){
      debugger;
      this.props.fetchSearchMain(nextProps.query);
      return true;
    }else if(nextProps.pageLoaded !== this.props.pageLoaded){
      return true;
    }else{
      return false;
    }
  }

  compileAll(nextProps){
    this.compileTags(nextProps);
    this.compileFilters(nextProps);
    this.compileProducts(nextProps);
  }

  compileTags(props){
    let { tags } = props;
    let recommendedTags = tags.searchIds.map((id) => tags[id]);
    let tagsArr = [];
    for(let i = 0; i < recommendedTags.length; i++){
      let t = recommendedTags[i];
      tagsArr.push(
        <li key={t.id} className="sr-tag">{t.tag_name}</li>
      )
    }
    this.tagsList = tagsArr;
  }

  compileFilters(props){
    let { filters } = props;
    let filtersArr = [];
    let keys = Object.keys(filters);
    for(let i = 0; i < keys.length; i++){
      let curFilter = keys[i];
      let list = [];
      for(let j = 0; j < filters[curFilter].length; j++){
        let curOption = filters[curFilter][j];
        list.push(
          <li key={curOption}>
            <p>{curOption}</p>
            <input type="checkbox"/>
          </li>
        )
      }
      filtersArr.push(
        <ul>{list}</ul>
      )
    }
    this.filtersList = filtersArr;
  }

  compileProducts(props){
    let { products, shops } = props;
    let searchProducts = products.searchIds.map((id) => products[id]);
    let productsArr = [];
    for(let i = 0; i < searchProducts.length; i++){
      let p = searchProducts[i];
      let s = shops[p.shop_id];
      productsArr.push(
        <IndexItem type="complex" product={p} shop={s} loggedIn={props.loggedIn}/>
      )
    }
    this.productsList = productsArr;
  }

  render(){
    if(this.props.pageLoaded !== 'searchmain'){
      return <p>loading</p>;
    }
    return(
      <div className='sr-container'>
        <div className='sr-tags'>
          <ul>
            {this.tagsList}
          </ul>
        </div>
        <div className='sr-main'>
          <div className='sr-filters'>
            {this.filtersList}
          </div>
          <div className='sr-products'>
            {this.productsList}
          </div>
        </div>
        <SearchResultFooterContainer/>
      </div>
    )
  }
}

export default SearchResult;