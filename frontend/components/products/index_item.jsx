import React from 'react';

class IndexItem extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <li>
        <p>lets see if this works</p>
        <p>{this.props.product.name}</p>
      </li>
    )
  }

}

export default IndexItem;