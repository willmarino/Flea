import React from 'react';

class DMDMOrdersBlock extends React.Component{
  constructor(props){
    super(props);
    this.todaysDate = new Date();
    this.filterOrdersByDate = this.filterOrdersByDate.bind(this);
    this.ordersObj = this.filterOrdersByDate();
    this.numNewOrders = this.ordersObj.new;
    this.numShippedOrders = this.ordersObj.shipped;
  }

  filterOrdersByDate(){
    let { orders } = this.props;
    // no real backend support for 'shipping orders'
    let newOrders = 0;
    let shippedOrders = 0;
    let currentMonth = this.todaysDate.getMonth();
    let currentDate = this.todaysDate.getDate();

    orders.forEach((order) => {
      let orderDateString = order.created_at.slice(0, 10);
      let orderDateParts = orderDateString.split("-");
      let orderDateMonth = parseInt(orderDateParts[1], 10) - 1; // -1 because date.getmonth gives 0-11, created_at has 1-12
      let orderDateDate = parseInt(orderDateParts[2], 10);
      if(orderDateMonth === currentMonth && orderDateDate + 7 > currentDate){
        newOrders += 1
      }else{
        shippedOrders += 1
      }
    })
    return { new : newOrders, shipped : shippedOrders };
  }
  
  render(){
    return(
      <div className="SM-dashboard-main-orders-block-container">
        <div className="SM-dashboard-main-stat-block-header">
          <p>Orders</p>
          <p>View all orders</p>
        </div>
        <div className="SM-dashboard-main-stat-block-body">
          <div className="SM-dashboard-main-stat-block-body-bar">
            <p>New</p>
            <p>{this.numNewOrders}</p>
          </div>
          <div className="SM-dashboard-main-stat-block-body-bar">
            <p>Old</p>
            <p>{this.numShippedOrders}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DMDMOrdersBlock;