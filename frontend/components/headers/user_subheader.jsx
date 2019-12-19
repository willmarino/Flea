import React from 'react';
import {Link} from 'react-router-dom';


class UserSubheader extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    
    if(Object.keys(this.props.products).length === 0){
      return <p>loading</p>;
    }else if(!this.props.products){
      return <p>loading</p>;
    }
    

    let showPath = "/products/:prodId";
    let randNums = [];
    let i = 0;
    while(i < 4){
      randNums.push(Math.round(Math.random() * 40));
      i += 1;
    }
    
    // let suggestedProds = randNums.map((num) => {
    //   <Link to={showPath}><p>{Object.values(this.props.products)[num].name}</p></Link>
    // });
    
    debugger;

    return(
      <div className="user-subheader">
        <p>Welcome back, {this.props.user.username}!</p>
        <div>
          <p>Suggested Items</p>
          <p>Based on your recent activity</p>
        </div>
        <div className="itemlist">
          {/* {suggestedProds} */}
          <Link to={`/products/${this.props.products[randNums[0]].id}`}><p>{Object.values(this.props.products)[randNums[0]].name}</p></Link>
        </div>

      </div>
    );
  }

}

export default UserSubheader;