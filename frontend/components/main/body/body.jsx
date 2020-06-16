import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AnonHomeContainer from './body_pages/anon_home/anon_home_container';
import UserHomeContainer from './body_pages/user_home/user_home_container'
import ProductShowContainer from '../../products/show/product_show_container';
import ShopShowContainer from '../../shop/shop_show_container';

const Body = () => {
  return(
    <Switch>
      <Route exact path="/anon" component={AnonHomeContainer}/>
      <Route path={'/anon/products/:prodId'} component={ProductShowContainer}/>
      <Route path={'/anon/shops/:shopId'} component={ShopShowContainer}/>

      <Route exact path="/" component={UserHomeContainer}/>
      <Route path={'/products/:prodId'} component={ProductShowContainer}/>
      <Route path={'/shops/:shopId'} component={ShopShowContainer}/>
    </Switch>
    // <Route path={shopShowPath} component={ShopShowContainer}/>
    // <Route path={searchResultPath} component={SearchResultContainer}/>
    // <Route exact path={userProfilePath} component={UserProfileContainer}/>
  )
}

export default Body;