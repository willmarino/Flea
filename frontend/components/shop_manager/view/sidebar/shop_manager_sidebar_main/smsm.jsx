import React from 'react';
import { withRouter } from 'react-router-dom';
import SMSMHeader from './smsm_header';
import SMSMTab from './smsm_tab';
import { BsClipboardData } from 'react-icons/bs';
import { FiShoppingBag } from 'react-icons/fi';

class SMSM extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tabs: [
        {name: 'Dashboard', url: '/shops-manager/dashboard', icon: <BsClipboardData/>},
        {name: 'Listings', url: '/shops-manager/listings', icon: <FiShoppingBag/>}
      ]
    }
  }

  render(){
    let { history } = this.props;
    let tabs = this.state.tabs.map((tab) => {
      let focused = (history.location.pathname === tab.url);
      return <SMSMTab name={tab.name} url={tab.url} icon={tab.icon} focused={focused}/>
    })
    return(
      <ul className="SMSM-list">
        <SMSMHeader/>
        {tabs}
      </ul>
    )
  }
}

export default withRouter(SMSM);














  // handleUIChange(e){
  //   e.preventDefault();
  //   // this.props.receiveShopManagerChange(e.currentTarget.dataset.component)
  //   this.props.history.push(`/shops-manager/${e.currentTarget.dataset.component}`);
  // }

  // navigate(e){
  //   let url = e.currentTarget.dataset.url;
  //   this.props.history.push(url);
  // }

  // switchNavModal(){
  //   if(!this.state.navModal){
  //     let navModal = <ul>
  //       <li key={1}>Go To</li>
  //       <li key={2} onClick={this.navigate} data-url={"/shops-manager"}>Shop Manager</li>
  //       <li key={3} onClick={this.navigate} data-url={"/"}>Etsy</li>
  //     </ul>;
  //     this.setState({ navModal : navModal });
  //   }else{
  //     this.setState({ navModal : null });
  //   }
  // }

  // generateSidebarMain(){
  //   let tabTypes = {
  //     // 'Search': 'search',
  //     'Dashboard': 'dashboard',
  //     'Listings': 'listings',
  //     // 'Messages': 'messages',
  //     // 'Orders & Shipping': 'orders_shipping',
  //     // 'Stats': 'stats',
  //     // 'Finances': 'finances',
  //     // 'Marketing': 'marketing',
  //     // 'Integrations': 'integrations',
  //     // 'Community & Help': 'community_help',
  //     // 'Settings': 'settings'
  //   };
  //   let compiledTabs = []
  //   // top item is different than others: has a dropdown with a link back to etsy main
  //   compiledTabs.push(
  //     <li key='searchbar' className="SMS-main-item">
  //         <div onClick={this.switchNavModal}>
  //           <p>icon</p>
  //           <p>Shop Manager</p>
  //           <p>a</p>
  //         </div>
  //       </li>
  //   )
  //   for(let i = 0; i < Object.keys(tabTypes).length; i++){
  //     let curKey = Object.keys(tabTypes)[i];
  //     compiledTabs.push(
  //       <li onClick={this.handleUIChange} data-component={tabTypes[curKey]} key={curKey} className="SMS-main-item">
  //         <div>
  //           <p className="SMS-item-one">icon</p>
  //           <p className="SMS-item-two">{curKey}</p>
  //         </div>
  //       </li>
  //     )
  //   }
  //   return compiledTabs;
  // }






      // this.navigate = this.navigate.bind(this);
    // this.handleUIChange = this.handleUIChange.bind(this);
    // this.generateSidebarMain = this.generateSidebarMain.bind(this);
    // this.switchNavModal = this.switchNavModal.bind(this);
    // this.list = this.generateSidebarMain();