import React from 'react';
import ProductPreview from './product_preview/product_preview';
import DefaultSpinner from '../loading_spinners/default_spinner';
import { CSSTransition } from 'react-transition-group';

class ProductsBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // newProducts: false,
      mounted: true,
      loading: false
    }
  }
  componentDidMount(){
    this.setState({ mounted: true });
  }
  componentDidUpdate(prevProps){
    // if(prevProps.products !== this.props.products && this.state.mounted){
    //   this.setState({loading: true}, () => {
    //     setTimeout(() => { this.setState({ loading: false }) }, 1000);
    //   });
    // }
    // !
    // }else if(prevProps.products === this.props.products && this.state.newProducts){
    //   this.setState({
    //     newProducts: false
    //   })
    // }
  }
  render(){
    let { products } = this.props;
    let productsList = [];
    for(let i = 0; i < products.length; i++){
      let p = products[i];
      productsList.push(
        <ProductPreview loggedIn={this.props.loggedIn} product={p} previewType={'complex'}/>
      )
    }
    if(this.state.loading){
      return (
        <div className="spinner-container">
          <DefaultSpinner/>
        </div>
      )
    }
    return(
      <CSSTransition classNames={'fade-shrink'} in={!this.state.loading} timeout={1500} appear={true}>
        <ul className="shop-show-products">
          {productsList}
        </ul>
      </CSSTransition>
    )
  }
}

export default ProductsBox;