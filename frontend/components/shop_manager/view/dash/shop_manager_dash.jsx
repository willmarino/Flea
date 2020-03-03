import React from 'react';
import { Route } from 'react-router-dom';
import DMSearchContainer from './dash_components/search/dm_search_container';
import DMDashboardContainer from './dash_components/dashboard_main/dm_dashboard_container';
import DMListingsContainer from './dash_components/listings/dm_listings_container';
import DMMessagesContainer from './dash_components/messages/dm_messages_container';
import DMOrdersContainer from './dash_components/orders/dm_orders_container';
import DMStatsContainer from './dash_components/stats/dm_stats_container';
import DMFinancesContainer from './dash_components/finances/dm_finances_container';
import DMMarketingContainer from './dash_components/marketing/dm_marketing_container';
import DMIntegrationsContainer from './dash_components/integrations/dm_integrations_container';
import DMCommunityContainer from './dash_components/community/dm_community_container';
import DMSettingsContainer from './dash_components/settings/dm_settings_container';

class ShopManagerDash extends React.Component{
  constructor(props){
    super(props);

    this.componentMap = {
      'search' : <DMSearchContainer/>,
      'dashboard' : <DMDashboardContainer/>,
      'listings' : <DMListingsContainer/>,
      'messages' : <DMMessagesContainer/>,
      'orders&shipping' : <DMOrdersContainer/>,
      'stats' : <DMStatsContainer/>,
      'finances' : <DMFinancesContainer/>,
      'marketing' : <DMMarketingContainer/>,
      'integrations' : <DMIntegrationsContainer/>,
      'community&help' : <DMCommunityContainer/>,
      'settings' : <DMSettingsContainer/>
    }
  }
  render(){
    let url = this.props.location.pathname;
    let urlArr = url.split("/");
    let urlEnding = urlArr[urlArr.length - 1];
    return(
      this.componentMap[urlEnding]
    )
  }
}

export default ShopManagerDash;