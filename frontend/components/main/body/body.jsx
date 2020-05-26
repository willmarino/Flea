import React from 'react';
import AnonHomeContainer from './body_pages/anon_main/anon_home_container';

import { withRouter, Route } from 'react-router-dom';

class Body extends React.Component{
  constructor(props){
    super(props);

    this.routingMap = {
      
    }
  }
  render(){
    return(
      <div>
        <Route exact path="/anon" component={AnonHomeContainer}/>
        {/* <Route path={showPath} component={ProductShowContainer}/>
        <Route path={shopShowPath} component={ShopShowContainer}/>
        <Route path={searchResultPath} component={SearchResultContainer}/>
        <Route exact path={userProfilePath} component={UserProfileContainer}/> */}
      </div>
    )
  }
}

export default withRouter(Body);