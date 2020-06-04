import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../../util/route_util';

import AnonMain from './main_pages/anon_main';
import UserMainContainer from './main_pages/user_main_container';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mounted: false,
      allReady: false
    }
    // this.mainSetReady = this.mainSetReady.bind(this);
  }

  componentDidMount(){
    if(!this.state.mounted){
      this.setState({ mounted: true });
    }
  }

  // mainSetReady(){
  //   debugger;
  //   this.setState({ allReady: true })
  // }

  render(){
    // debugger;
    // if(!this.state.allReady){
    //   return <div class="lds-ring"><div></div><div></div><div></div><div></div></div>;
    // }
    return(
      // <CSSTransition classNames={'fade-shrink'} in={this.state.mounted} timeout={1500} appear={true}>
        <Switch>
          <AuthRoute path="/anon" component={AnonMain}/>
          {/* <AuthRoute path="/anon" render={(props) => <AnonMain {...props} mainSetReady={this.mainSetReady}/>}/> */}
          <ProtectedRoute path="/" component={UserMainContainer}/>
        </Switch>
      // </CSSTransition>
    )
  }
}

export default Main;