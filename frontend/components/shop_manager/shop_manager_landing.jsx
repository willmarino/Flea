import React from 'react';
import ShopManagerCreateShopContainer from './create/shop_manager_create_shop_container';
import ShopManagerMain from './view/shop_manager_main';

class ShopManagerLanding extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      fetched : false
    }
  }

  componentDidMount(){
    this.props.fetchOwnedShops()
      .then(() => {this.setState({ fetched : true })});
  }

  render(){
    if(this.state.fetched){
      if(Object.keys(this.props.shops.ownedShopIds).length === 0){
        return(
          <ShopManagerCreateShopContainer/>
        )
      }else{
        return(
          <ShopManagerMain/>
        )
      }
    }else{
      return(
        <p>loading</p>
      )
    }
  }
}

export default ShopManagerLanding;