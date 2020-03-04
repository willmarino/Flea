import React from 'react';
import DMDMStatsBlock from './dm_dashboard_main_stats_block';

const DashboardMainStats = (props) => {
  return(
    <div className="SM-dashboard-main-stats-container">
      <DMDMStatsBlock name={'Total Views'} num={props.numViews}/>
      <DMDMStatsBlock name={'Visits'} num={props.numVisits}/>
      <DMDMStatsBlock name={'Orders'} num={props.numOrders}/>
      <DMDMStatsBlock name={'Revenue'} num={props.revenue}/>
    </div>
  )
};

export default DashboardMainStats;