import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import ShopManagerCreateShopContainer from './create/shop_manager_create_shop_container';
import ShopManagerMain from './view/shop_manager_main';
import DefaultSpinner from '../loading_spinners/default_spinner';

class ShopManagerLanding extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fetched : false,
      loading: false
    }
  }

  componentDidMount(){
    this.props.fetchOwnedShops()
      .then(() => {this.setState({ fetched : true })});
    this.setState({ loading: true }, () => {
      setTimeout(() => { this.setState({loading: false})}, 1000);
    });
  }

  render(){
    if(this.state.loading || !this.state.fetched){
      return <DefaultSpinner/>;
    }
    if(this.state.fetched){
      return(
        <CSSTransition in={!this.state.loading} classNames={'fade-shrink'} timeout={1500} appear={true}>
          <Switch>
            <Route exact path="/shops-manager/create" component={ShopManagerCreateShopContainer}/>
            <Route path="/shops-manager" component={ShopManagerMain}/>
          </Switch>
        </CSSTransition>
      ) 
    }
  }
}

export default ShopManagerLanding;