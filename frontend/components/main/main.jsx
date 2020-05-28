import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../../util/route_util';
import { CSSTransition } from 'react-transition-group';

import AnonMain from './main_pages/anon_main';
import UserMainContainer from './main_pages/user_main_container';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mounted: false
    }
  }

  componentDidMount(){
    if(!this.state.mounted){
      this.setState({ mounted: true });
    }
  }

  render(){
    debugger;
    return(
      <CSSTransition classNames={'fade'} in={this.state.mounted} timeout={3000} appear={true}>
        <Switch>
          <AuthRoute path="/anon" component={AnonMain}/>
          <ProtectedRoute path="/" component={UserMainContainer}/>
        </Switch>
      </CSSTransition>
    )
  }
}

export default Main;