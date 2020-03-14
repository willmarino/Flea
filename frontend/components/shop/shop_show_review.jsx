import React from 'react';
import IndexItem from '../products/index/index_item';

class ShopShowReview extends React.Component{
  constructor(props){
    super(props);
    this.configureDate = this.configureDate.bind(this);
  }

  configureDate(str){
    str = str.slice(0, 10);
    let months = [
      'January', 'February', 'March',
      'April', 'May', 'June',
      'July', 'August', 'September',
      'October', 'November', 'December'
    ];
    let [year, month, day] = str.split('-');
    return `${months[month - 1]} ${day}`
  }

  render(){
    // let tagsList = [];
    // for(let i = 0; i < this.props.tags.length; i++){
    //   let tag = this.props.tags[i]
    //   tagsList.push(
    //     <li key={Math.round(Math.random() * 1000)}>{tag.tag_name}</li>
    //   )
    // }

    return(
      <li className='shop-show-review-container' key={this.props.review.id}>
        <div className='left-bar-user-avatar'>
          <img src={this.props.author.photoURL} alt=""/>
        </div>
        <div>
          <div className='shop-show-review-user-info'>
            <p className='shop-show-review-username'>{this.props.author.username}</p>
            <p className="shop-show-review-timestamp"> {this.configureDate(this.props.review.created_at)}</p>
          </div>
          <div className="shop-show-review-rating">{this.props.starRating}</div>
          <p className="shop-show-review-body">{this.props.review.body}</p>
          <div className='shop-show-review-product-info'>
            <IndexItem type="review" product={this.props.product}/>
            <p className="shop-show-review-product-name">{this.props.product.name}</p>
          </div>
        </div>

      </li>
    )
  }
}

export default ShopShowReview;