import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import AnonHomeContainer from './body_pages/anon_main/anon_home_container';

const Body = () => {
  return(
    <Route exact path="/anon" component={AnonHomeContainer}/>

    // <Route path={showPath} component={ProductShowContainer}/>
    // <Route path={shopShowPath} component={ShopShowContainer}/>
    // <Route path={searchResultPath} component={SearchResultContainer}/>
    // <Route exact path={userProfilePath} component={UserProfileContainer}/>
  )
}

export default withRouter(Body);