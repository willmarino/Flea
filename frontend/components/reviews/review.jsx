import React from 'react';

class Review extends React.Component{
    constructor(props){
        super(props);

        this.starsify = this.starsify.bind(this);
        this.configureDate = this.configureDate.bind(this);
        this.handleNavigate = this.handleNavigate.bind(this);
    }

    handleNavigate(e){
        e.preventDefault();
        let { history, product, loggedIn} = this.props;
        let url = `/products/${product.id}`
        if(!loggedIn){
            url = '/anon' + url;
        }
        history.push(url);
    }

    starsify(n){
        let stars = [];
            while(stars.length < n){
                stars.push(<i className="fa fa-star" key={stars.length}></i>)
            }
          return stars;
    }

    configureDate(str){
        let months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ];
        let [year, month, day] = str.split('-');
        return `${months[month - 1]}, ${day}`
    
    }

    render(){
        return(
            <div className="review">
                <div className='review-info-and-avatar'>
                    <img src={this.props.author.photoURL} alt="" className="review-avatar"/>
                    <div className='review-info'>
                        <div className='review-username-and-time'>
                            <p className='review-username'>{this.props.author.username}</p>
                            <p className='review-timestamp'>{this.configureDate((this.props.review.created_at).slice(0, 10))}</p>
                        </div>
                        <div>
                            <p className='review-star-rating'>{this.starsify(this.props.review.rating)}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p className='user-review-body'>{this.props.review.body}</p>
                    </div>
                </div>
                <div className='product-img-and-name'>
                    <img onClick={this.handleNavigate} src={this.props.product.photoURL} className="review-product-image" alt=""/>
                    <p onClick={this.handleNavigate}>{this.props.product.name}</p>
                </div>
            </div>
                
        );
    }
}

export default Review;