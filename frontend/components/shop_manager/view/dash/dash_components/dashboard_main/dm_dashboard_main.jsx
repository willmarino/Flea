import React from 'react';
import DashboardMainStats from './dm_dashboard_main_stats';
import DMDMOrdersBlock from './dm_dashboard_main_orders_block';
import DMDMListingsBlock from './dm_dashboard_main_listings_block';
import DMDMActivityBlock from './dm_dashboard_main_activity';
import { objToDate } from '../../../../../../util/date_util';

class DMDashboardMain extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      modal : null,
      timePeriod : '7 Days'
    }
    this.aggregateRevenue = this.aggregateRevenue.bind(this);
    this.handleModalSwitch = this.handleModalSwitch.bind(this);
    this.setTimePeriod = this.setTimePeriod.bind(this);
    this.filterByDate = this.filterByDate.bind(this);

    this.todaysDate = new Date();
    this.filters = ['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'This Year', 'Last Year', 'All Time'];
    this.modal = <ul>{this.filters.map((el, i) => <li onClick={this.setTimePeriod} key={i} data-idx={i}>{el}</li>)}</ul>
  }

  componentDidMount(){
    this.props.fetchOwnedShopInfo();
  }

  filterByDate(){
    
  }

  setTimePeriod(e){
    this.setState({ timePeriod : this.filters[parseInt(e.currentTarget.dataset.idx, 10)] });
  }

  handleModalSwitch(){
    if(this.state.modal){
      this.setState({ modal : null });
    }else{
      this.setState({ modal : this.modal });
    }
  }

  aggregateRevenue(productOrders){
    let { products } = this.props;
    let sum = 0
    productOrders.forEach((po) => {
      sum += products[po.product_id].price
    })
    return sum;
  }

  render(){
    if(this.props.pageLoaded !== "SM-dashboard-main"){
      return <p>loading</p>;
    }
    let { views, shopViews, orders, productOrders, products } = this.props;
    return(
      <div className="SM-dashboard-main-container">
        <div className="SM-dashboard-main-header">
          <div className="SM-dashboard-main-header-one">
            <p>Stats Overview for</p>
            <div onClick={this.handleModalSwitch} >
              <p>{this.state.timePeriod}</p>
              {this.state.modal}
            </div>
          </div>
          <p>View Detailed Stats</p>
        </div>
        <DashboardMainStats
          numViews={views.shopProductViewIds.length}
          numVisits={shopViews.shopViewIds.length}
          numOrders={orders.shopOrderIds.length}
          numProductOrders={productOrders.shopProductOrderIds.length}
          revenue={this.aggregateRevenue(productOrders.shopProductOrderIds.map((id) => productOrders[id]))}/>
        <div className="SM-dashboard-main-info">
          <p>Hey, while youre here check out my other projects</p>
          <div className="SM-dashboard-main-info-projects">
            <div>
              <a href="http://o-o-t-d.herokuapp.com/#/splash" target="_blank">OOTD</a>
            </div>
            <div>
              <a href="https://willmarino.github.io/Astro/" target="_blank">Astro</a>
            </div>
          </div>
        </div>
        <div className="SM-dashboard-main-stat-displays">
          <DMDMOrdersBlock orders={orders.shopOrderIds.map((id) => orders[id])}/>
          <DMDMListingsBlock listings={ products.shopProductIds.map((id) => products[id])}/>
        </div>
        <DMDMActivityBlock/>
      </div>
    )
  }
}

export default DMDashboardMain;




// DashboardMainStats
//           views={views.shopProductViewIds.map((id) => views[id])}
//           visits={shopViews.shopViewIds.map((id) => shopViews[id])}
//           orders={orders.shopOrderIds.map((id) => orders[id])}
//           productOrders={productOrders.shopProductOrderIds.map((id) => productOrders[id])}
//           revenue={this.aggregateRevenue(productOrders.shopProductOrderIds.map((id) => productOrders[id]))}/>