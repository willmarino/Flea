import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
      return(
        <Switch>
          <Route exact path="/shops-manager/create" component={ShopManagerCreateShopContainer}/>
          <Route path="/shops-manager/" component={ShopManagerMain}/>
        </Switch>
      )
      
    }else{
      return(
        <p>loading</p>
      )
    }
  }
}

export default ShopManagerLanding;