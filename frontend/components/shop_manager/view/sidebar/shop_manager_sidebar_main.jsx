import React from 'react';

class ShopManagerSidebarMain extends React.Component{
  constructor(props){
    super(props);
    this.handleUIChange = this.handleUIChange.bind(this);
    this.generateSidebarMain = this.generateSidebarMain.bind(this);
    this.list = this.generateSidebarMain();
  }

  handleUIChange(e){
    e.preventDefault();
    this.props.receiveShopManagerChange(e.currentTarget.dataset.component)
  }

  generateSidebarMain(){
    let tabTypes = [
      'Search',
      'Dashboard',
      'Listings',
      'Messages',
      'Orders & Shipping',
      'Stats',
      'Finances',
      'Marketing',
      'Integrations',
      'Community & Help',
      'Settings'
    ];
    let compiledTabs = []
    // top item is different than others, has a dropdown with a link back to etsy main
    compiledTabs.push(
      <li key='searchbar' className="SMS-main-item">
          <div>
            <p>icon</p>
            <p>Shop Manager</p>
            <p>a</p>
          </div>
        </li>
    )
    for(let i = 0; i < tabTypes.length; i++){
      let curTab = tabTypes[i];
      compiledTabs.push(
        <li onClick={this.handleUIChange} data-component={curTab} key={curTab} className="SMS-main-item">
          <div>
            <p className="SMS-item-one">icon</p>
            <p className="SMS-item-two">{curTab}</p>
          </div>
        </li>
      )
    }
    return compiledTabs;
  }

  render(){
    return(
      <ul className="SMS-main-list">
        {this.list}
      </ul>
    )
  }
}

export default ShopManagerSidebarMain;