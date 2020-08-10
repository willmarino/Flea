import React from 'react';
import DMMBMHeader from './dmmbm_header';
import DMMBMMessageDisplayContainer from './dmmbm_message_display_container';
import { Route, Switch } from 'react-router-dom';

const DMMBodyMain = () => {
  return(
    <div className='dmm-body-main-container'>
      <DMMBMHeader/>
      <Switch>
        <Route exact path="/shops-manager/messages" component={DMMBMMessageDisplayContainer}/>
        <Route exact path="/shops-manager/messages/:conversationId" component={DMMBMMessageDisplayContainer}/>

      </Switch>
    </div>
  )
}

export default DMMBodyMain;