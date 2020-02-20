import React from 'react';
import DMSearchContainer from './dash_components/dm_search_container';
import DMDashboardContainer from './dash_components/dm_dashboard_container';
import DMListingsContainer from './dash_components/dm_listings_container';
import DMMessagesContainer from './dash_components/dm_messages_container';
import DMOrdersContainer from './dash_components/dm_orders_container';
import DMStatsContainer from './dash_components/dm_stats_container';
import DMFinancesContainer from './dash_components/dm_finances_container';
import DMMarketingContainer from './dash_components/dm_marketing_container';
import DMIntegrationsContainer from './dash_components/dm_integrations_container';
import DMCommunityContainer from './dash_components/dm_community_container';
import DMSettingsContainer from './dash_components/dm_settings_container';

class ShopManagerDash extends React.Component{
  constructor(props){
    super(props);

    this.componentMap = {
      'Search' : <DMSearchContainer/>,
      'Dashboard' : <DMDashboardContainer/>,
      'Listings' : <DMListingsContainer/>,
      'Messages' : <DMMessagesContainer/>,
      'Orders & Shipping' : <DMOrdersContainer/>,
      'Stats' : <DMStatsContainer/>,
      'Finances' : <DMFinancesContainer/>,
      'Marketing' : <DMMarketingContainer/>,
      'Integrations' : <DMIntegrationsContainer/>,
      'Community & Help' : <DMCommunityContainer/>,
      'Settings' : <DMSettingsContainer/>
    }
  }
  render(){
    return(
      this.componentMap[this.props.tab]
    )
  }
}

export default ShopManagerDash;