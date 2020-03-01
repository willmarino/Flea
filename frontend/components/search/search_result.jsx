import React from 'react';
import IndexItem from '../products/index/index_item';
import SearchResultFooterContainer from './search_result_footer_container';

class SearchResult extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      tags : null,
      filters : null,
      products : null
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

  componentDidUpdate(prevProps){
    if(prevProps.pageLoaded === "none" && this.props.pageLoaded === "searchmain"){
      this.compileAll(this.props);
    }else if(prevProps.query !== this.props.query){
      this.props.fetchSearchMain(this.props.query);
    }
  }


  compileAll(props){
    this.compileTags(props);
    this.compileFilters(props);
    this.compileProducts(props);
    this.setState({ tags : this.tagsList, filters : this.filtersList, products : this.productsList });
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
            {this.state.tags}
          </ul>
        </div>
        <div className='sr-main'>
          <div className='sr-filters'>
            {this.state.filters}
          </div>
          <div className='sr-products'>
            {this.state.products}
          </div>
        </div>
        <SearchResultFooterContainer/>
      </div>
    )
  }
}

export default SearchResult;