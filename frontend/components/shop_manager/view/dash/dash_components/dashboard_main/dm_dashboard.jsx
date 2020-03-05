import React from 'react';
import { Route } from 'react-router-dom';
import DMDashboardMainContainer from './dm_dashboard_main_container';

class DMDashboard extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <Route exact path="/shops-manager/dashboard/" component={DMDashboardMainContainer}/>
    )
  }
}

export default DMDashboard;