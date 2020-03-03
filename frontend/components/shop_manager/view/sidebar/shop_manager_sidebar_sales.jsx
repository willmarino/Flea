import React from 'react';

class ShopManagerSidebarSales extends React.Component{
  constructor(props){
    super(props);
    this.generateList = this.generateList.bind(this);
    this.list = this.generateList();
  }

  handleUIChange(e){
    e.preventDefault();
    this.props.receiveShopManagerChange(e.currentTarget.dataset.component);
  }

  generateList(){
    let { shops } = this.props;
    let ownedShops = shops.ownedShopIds.map((id) => shops[id]);
    let shopTabs = [];
    for(let i = 0; i < ownedShops.length; i++){
      let curShop = ownedShops[i];
      shopTabs.push(
        <li onClick={this.handleUIChange} data-component={curShop.name} key={curShop.name} className="SMS-sales-item">
          <p>icon</p>
          <p>{curShop.name}</p>
        </li>
      )
    }
    return shopTabs;
  }

  render(){
    return(
      <div className="SMS-sales-container">
        <p className="SMS-sales-item" id="SMS-sales-header">Sales Channel</p>
        <ul className="SMS-sales-list">
          {this.list}
        </ul>
      </div>
    )
  }
}

export default ShopManagerSidebarSales;