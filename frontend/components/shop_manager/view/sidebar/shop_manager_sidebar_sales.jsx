import React from 'react';

class ShopManagerSidebarSales extends React.Component{
  constructor(props){
    super(props);
    this.handleUIChange = this.handleUIChange.bind(this);
    this.generateList = this.generateList.bind(this);
    this.list = this.generateList();
  }

  handleUIChange(e){
    e.preventDefault();
    let id = parseInt(e.currentTarget.dataset.id, 10);
    this.props.history.push(`/ownedshops/${id}`)
  }

  generateList(){
    let { shops } = this.props;
    let ownedShops = shops.ownedShopIds.map((id) => shops[id]);
    let shopTabs = [];
    for(let i = 0; i < ownedShops.length; i++){
      let curShop = ownedShops[i];
      shopTabs.push(
        <li onClick={this.handleUIChange} data-component={curShop.name} data-id={curShop.id} key={curShop.name} className="SMS-sales-item">
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