import React from 'react';
import DemoUserContainer from '../users/demo_user_container';
import { fetchUsers } from '../../actions/users_actions';


class AnonHeader extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      search: "Search for items or shops"
    };

  }

  componentDidMount(){
    this.props.fetchProducts();
  }

  render(){
    return(
      <div className="header">
        <div className="logo" id="first">Flea</div>
        <div className="search-and-icon" id="second">
          <input type="text" className="search" />
          <i className="fa fa-search" id="user-search-icon"></i>
        </div>
        <div className="header-items anon-header-items" id="third">  
          <button onClick={() => this.props.openModal('login')}>Sign In</button>
          {/* <i class="fa fa-search" id="search-icon"></i> */}
          <DemoUserContainer/>
          <button className="cart"><i className="fa fa-shopping-cart"></i></button>
        </div>
      </div>
    );
  }
}

export default AnonHeader;