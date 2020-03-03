import React from 'react';
import DashboardMainStats from './dm_dashboard_main_stats';

class DMDashboardMain extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      modal : null,
      timePeriod : '7 Days'
    }
    this.handleModalSwitch = this.handleModalSwitch.bind(this);

    this.todaysDate = new Date();
    this.filters = ['Today, Yesterday, Last 7 Days, Last 30 Days, This Year, Last Year, All Time'];
    this.modal = <ul>{this.filters.map((el, i) => <li key={i}>{el}</li>)}</ul>

    this.timeOptions = {
      0 : {
        views : 0, visits : 0, orders : 0, revenue : 0
      }, 1 : {
        views : 0, visits : 0, orders : 0, revenue : 0
      }, 2 : {
        views : 0, visits : 0, orders : 0, revenue : 0
      }, 3 : {
        views : 0, visits : 0, orders : 0, revenue : 0
      }, 4 : {
        views : 0, visits : 0, orders : 0, revenue : 0
      }, 5 : {
        views : 0, visits : 0, orders : 0, revenue : 0
      }, 6 : {
        views : 0, visits : 0, orders : 0, revenue : 0
      }
    }
  }

  componentDidMount(){
    this.props.fetchOwnedShopInfo();
  }

  handleModalSwitch(){
    if(this.state.modal){
      this.setState({ modal : null });
    }else{
      this.setState({ modal : this.modal });
    }
  }

  aggregateRevenue(orders){

  }

  render(){
    debugger;
    if(this.props.pageLoaded !== "SM-dashboard-main"){
      return <p>loading</p>;
    }
    debugger;
    return(
      <div className="SM-dashboard-main-container">
        <div className="SM-dashboard-main-header">
          <p>Stats Overview for</p>
          <div onClick={this.handleModalSwitch}>
            <p>{this.state.timePeriod}</p>
          </div>
          <p>View Detailed Stats</p>
        </div>
        <DashboardMainStats
          views={this.props.views.shopProductViewIds.map((id) => this.props.views[id])}
          visits={this.props.shopViews.shopViewIds.map((id) => this.props.shopViews[id])}
          orders={this.props.orders.shopOrderids.map((id) => this.props.orders[id])}
          revenue={"abc"}/>
        <div className="SM-dashboard-main-info">
          <p>Hey, while youre here check out my other projects</p>
          <a href="http://o-o-t-d.herokuapp.com/#/splash" target="_blank">OOTD</a>
          <a href="https://willmarino.github.io/Astro/" target="_blank">Astro</a>
        </div>
        <div className="SM-dashboard-main-stat-displays">

        </div>
        <div className="SM-dashboard-main-activity">

        </div>
      </div>
    )
  }
}

export default DMDashboardMain;