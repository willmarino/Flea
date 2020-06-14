import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AnonHomeContainer from './body_pages/anon_main/anon_home_container';
import ProductShowContainer from '../../products/show/product_show_container';

const Body = () => {
  return(
    <Switch>
      <Route exact path="/anon" component={AnonHomeContainer}/>
      <Route path={'/anon/products/:prodId'} component={ProductShowContainer}/>

      <Route path={'/products/:prodId'} component={ProductShowContainer}/>
    </Switch>
    // <Route path={shopShowPath} component={ShopShowContainer}/>
    // <Route path={searchResultPath} component={SearchResultContainer}/>
    // <Route exact path={userProfilePath} component={UserProfileContainer}/>
  )
}

export default Body;