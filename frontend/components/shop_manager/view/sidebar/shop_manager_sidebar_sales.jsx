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
    let { ownedShops } = this.props;
    let shopTabs = [];
    for(let i = 0; i < Object.values(ownedShops).length; i++){
      let curShop = Object.values(ownedShops)[i];
      shopTabs.push(
        <li onClick={this.handleUIChange} data-component={curShop.name} key={curShop.name}>
          <p>icon</p>
          <p>{curShop.name}</p>
        </li>
      )
    }
    return shopTabs;
  }

  render(){
    return(
      <div>
        <p>Sales Channel</p>
        <ul>
          {this.list}
        </ul>
      </div>
    )
  }
}

export default ShopManagerSidebarSales;