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
      <li key='searchbar'>
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
        <li onClick={this.handleUIChange} data-component={curTab} key={curTab}>
          <div>
            <p>icon</p>
            <p>{curTab}</p>
          </div>
        </li>
      )
    }
    return compiledTabs;
  }

  render(){
    return(
      <ul>
        {this.list}
      </ul>
    )
  }
}

export default ShopManagerSidebarMain;