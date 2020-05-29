import React from 'react';
import { withRouter } from 'react-router-dom';

class SimpleProductPreview extends React.Component{
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){

  }

  render(){
    let { product } = this.props;
    return(
      <div onClick={this.handleClick} className='simple-product-preview-container'>
        <img className="standard-product-preview-photo" src={product.photoURL} alt=""/>
        <div className="spp-info">
          <p>${product.price}</p>
        </div>
      </div>
    )
  }
}

export default withRouter(SimpleProductPreview);