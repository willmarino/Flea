import React from 'react';
import SearchResultFooterContainer from './search_result_footer_container';
import ProductsBox from '../products/products_box';
import SearchTags from './search_tags/search_tags';
import DefaultSpinner from '../loading_spinners/default_spinner';
import { CSSTransition } from 'react-transition-group';

class SearchResult extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      // tags : null,
      // filters : null,
      // products : null,
      generalFilters : {
        category : null,
        price : { min : null, max : null }
      },
      // sortBy : null
      loading: false
    }

    // this.compileTags = this.compileTags.bind(this);
    // this.compileFilters = this.compileFilters.bind(this);
    // this.compileProducts = this.compileProducts.bind(this);
    // this.setCategoryFilter = this.setCategoryFilter.bind(this);
    // this.compileCategoryFilters = this.compileCategoryFilters.bind(this);
    // this.setPriceFilter = this.setPriceFilter.bind(this);
    // this.compilePriceFilter = this.compilePriceFilter.bind(this);
    // this.compileAll = this.compileAll.bind(this);
    // this.handleTagClick = this.handleTagClick.bind(this);
    // this.addEventListeners = this.addEventListeners.bind(this);

    // this.addEventListeners();
    this.tagsList = 'tags';
    this.filtersList = 'filters';
    this.productsList = 'products';
    this.priceFilters = null;
    this.categoryFilters = null;
  }

  componentDidMount(){
    this.props.fetchSearchMain(this.props.query);
    this.setState({loading: true}, () => {
      setTimeout(() => {this.setState({loading: false})}, 1000);
    })
  }

  // componentDidUpdate(prevProps){
  //   if(this.props.query !== prevProps.query){
  //     this.setState({loading: true}, () => {
  //       setTimeout(() => {this.setState({loading: false})}, 1000);
  //     })
  //   }
  // }

  // handleTagClick(e){
  //   e.preventDefault();
  //   let query = e.currentTarget.dataset.val;
  //   this.props.createSearch(query)
  //     .then(this.props.history.push(`/search_result?query=${query}`));
  // }

  // addEventListeners(){
  //   window.addEventListener('keypress', (e) => {
  //     if(e.keyCode === '40'){
  //       // move down
  //     }
  //   });
  //   window.addEventListener('keypress', (e) => {
  //     if(e.keyCode === '38'){
  //       // move up
  //     }
  //   });
  // }

  componentDidUpdate(prevProps){
    if(prevProps.pageLoaded[prevProps.pageLoaded.length - 1] === "none" &&
      this.props.pageLoaded[this.props.pageLoaded.length - 1] === "searchmain"){
      // this.compileAll(this.props);
    }else if(prevProps.query !== this.props.query && !this.state.loading){
      this.props.fetchSearchMain(this.props.query);
      this.setState({ loading: true }, () => {
        setTimeout(() => {
          this.setState({ loading: false });
        }, 1000);
      })
    }
  }

  // compileAll(props){
    // this.compileTags(props);
    // this.compileFilters(props);
    // this.compileProducts(props);
    // this.setState({ tags : this.tagsList, filters : this.filtersList, products : this.productsList });

    // this.setState({ tags : this.tagsList, filters : this.filtersList, products : this.productsList }, () => {
      // this.compilePriceFilter();
      // this.compileCategoryFilters();
    // });
  // }

  // compileCategoryFilters(){
  //   let categories = this.props.categories.searchIds.map((id) => this.props.categories[id]);
  //   let categoriesList = [];
  //   for(let i = 0; i < categories.length; i++){
  //     let curCategory = categories[i];
  //     categoriesList.push(
  //       <li key={curCategory.id} onClick={this.setCategoryFilter} data-catid={curCategory.id}>{curCategory.name}</li>
  //     )
  //   }
  //   this.setState({ filters : this.state.filters.concat(categoriesList) });
  // }
  
  // setCategoryFilter(e){
  //   generalFilters = this.state.generalFilters;
  //   if(generalFilters.category){
  //     generalFilters.category = null;
  //   }else{
  //     generalFilters.category = e.currentTarget.dataset.catid;
  //   }
  //   this.setState({ generalFilters : generalFilters });
  // }

  // create filters for price of products returned by search
  // compilePriceFilter(){
  //   // price filters array will be a series of list items, later placed into a ul for return
  //   this.priceFilters = [];
  //   // minPrice refers to the multiple of 50 which is higher than but closest to the minimally priced item
  //   // so that we can have an 'under ${minprice}' filter which returns at least one product
  //   // maxPrice refers to the multiple of 50 which is lower than but closest to the maximally priced item
  //   // so that we can have an 'over ${maxPrice}' filter which returns at least one product
  //   let minPrice = null;
  //   let maxPrice = null;
  //   // iterate through the compiled indexitems and grab the price of each product they contain,
  //   // setting max and min to the most and least expensive items as iteration continues
  //   // ** More efficient than using both arr.max and arr.min to find min and max (n instead of 2n)
  //   for(let i = 0; i < this.state.products.length; i++){
  //     let el = this.state.products[i];
  //     let elPrice = el.props.product.price;
  //     if (!minPrice || elPrice < minPrice){
  //       minPrice = elPrice;
  //     }
  //     if(!maxPrice || elPrice > maxPrice){
  //       maxPrice = elPrice;
  //     }
  //   }
  //   // I want minPrice and maxPrice to be multiples of 50 for simplicity's sake,
  //   // no user wants to use an 'over $124' price filter more than an 'over $100' or 'over $150'
  //   while(minPrice % 50 !== 0){
  //     minPrice += 1;
  //   }
  //   while(maxPrice % 50 !== 0){
  //     maxPrice -= 1;
  //   }
  //   // create a array of each price increment which will be used in the filters
  //   prices = [];
  //   price = minPrice;
  //   while(price !== maxPrice){
  //     prices.push(price);
  //     price += 50;
  //   };

  //   for(let i = 0; i < prices.length; i++){
  //     let curPrice = prices[i];
  //     if(i === prices.length - 1){
  //       this.priceFilters.push(<li key={`over${maxPrice}`}>
  //         <input onClick={this.setPriceFilter} data-min={maxPrice} data-max={100000} type="checkbox"/>
  //         <p>Over ${maxPrice}</p>
  //       </li>
  //       )
  //     }else if(i === 0){
  //       this.priceFilters.push(<li key={`under${minPrice}`}>
  //         <input onClick={this.setPriceFilter} data-min={0} data-max={minPrice} type="checkbox"/>
  //         <p>Under ${minPrice}</p>
  //       </li>
  //       )
  //     }else{
  //       this.priceFilters.push(<li key={`over${curPrice}under${prices[i+1]}`}>
  //         <input onClick={this.setPriceFilter} data-min={curPrice} data-max={prices[i + 1]} type="checkbox"/>
  //         <p>Over ${curPrice} and Under ${prices[i + 1]}</p>
  //       </li>
  //       )
  //     }
  //   }
  //   this.setState({ filters : this.state.filters.concat(this.priceFilters) });
  // }

  // setPriceFilter(e){
  //   let generalFilters = this.state.generalFilters;
  //   if(generalFilters.price.min !== e.currentTarget.dataset.min){
  //     generalFilters.price.min = e.currentTarget.dataset.min;
  //   }else{
  //     generalFilters.price.min = null;
  //   }
  //   if(generalFilters.price.max !== e.currentTarget.dataset.max){
  //     generalFilters.price.max = e.currentTarget.dataset.max;
  //   }else{
  //     generalFilters.price.max = null;
  //   }
  //   this.setState({ generalFilters : generalFilters });
  // }



  // compileTags(props){
  //   let { tags } = props;
  //   let recommendedTags = tags.searchIds.map((id) => tags[id]);
  //   let tagsArr = [];
  //   for(let i = 0; i < recommendedTags.length; i++){
  //     let t = recommendedTags[i];
  //     tagsArr.push(
  //       <li key={t.id} data-val={t.tag_name} onClick={this.handleTagClick} className="sr-tag">
  //         <p className='sr-tag-p'>{t.tag_name}</p>
  //       </li>
  //     )
  //   }
  //   this.tagsList = tagsArr;
  // }

  // compileFilters(props){
  //   let { filters } = props;
  //   let filtersArr = [];
  //   let keys = Object.keys(filters);
  //   for(let i = 0; i < keys.length; i++){
  //     let curFilter = keys[i];
  //     let list = [];
  //     for(let j = 0; j < filters[curFilter].length; j++){
  //       let curOption = filters[curFilter][j];
  //       list.push(
  //         <li key={curOption} className='sr-filter-item'>
  //           <input type="checkbox"/>
  //           <p>{curOption}</p>
  //         </li>
  //       );
  //     }
  //     filtersArr.push(
  //       <p className='sr-filter-item-header'>{curFilter}</p>
  //     );
  //     filtersArr.push(
  //       <ul>{list}</ul>
  //     );
  //   }
  //   this.filtersList = filtersArr;
  // }

  // compileProducts(props){
  //   let { products, shops } = props;
  //   let searchProducts = products.searchIds.map((id) => products[id]);
  //   let productsArr = [];
  //   for(let i = 0; i < searchProducts.length; i++){
  //     let p = searchProducts[i];
  //     let s = shops[p.shop_id];
  //     productsArr.push(
  //       <IndexItem type="complex" product={p} shop={s} loggedIn={props.loggedIn} key={p.id}/>
  //     )
  //   }
  //   this.productsList = productsArr;
  // }

  render(){
    // if(!this.state.products || !this.state.filters || !this.state.tags){
    //   return <p>loading</p>;
    // }
    let {products, tags, pageLoaded} = this.props;
    if(pageLoaded[pageLoaded.length - 1] !== 'searchmain' || this.state.loading){
      return <DefaultSpinner/>;
    }

    let category;
    if(!this.state.generalFilters.category){
      category = 'All Categories';
    }else{
      category = this.state.generalFilters.category;
    }
    return(
      <CSSTransition in={!this.state.loading} classNames={'fade-shrink'} appear={true} timeout={1500}>
        <div className='sr-container'>
          <SearchTags tags={tags}/>
          <div className='sr-main'>
            <div className='sr-products-and-header'>
              <div className='sr-products-header'>
                <p id='srph-one'>{category}</p>
                <p id='srph-two'>> "{this.props.query}"</p>
                <p id='srph-three'>({products.searchIds.length} Results)</p>
              </div>
              <ProductsBox products={this.props.products.searchIds.map((id) => this.props.products[id])} loggedIn={this.props.loggedIn}/>
            </div>
          </div>
          <SearchResultFooterContainer/>
        </div>
      </CSSTransition>
    )
  }
}

export default SearchResult;