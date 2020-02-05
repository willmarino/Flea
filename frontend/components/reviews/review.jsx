import React from 'react';

class Review extends React.Component{
    constructor(props){
        super(props);

        this.starsify = this.starsify.bind(this);
    }

    starsify(n){
        let stars = [];
            while(stars.length < n){
                stars.push(<i className="fa fa-star" key={stars.length}></i>)
            }
          return stars;
      }

    render(){
        debugger;
        return(
            <div className="review-comp">
                <div>
                    <img src={this.props.author.photoURL} alt="" id="review-avatar"/>
                    <div>
                        <div>
                            <p>{this.props.author.username}</p>
                            <p>{this.props.review.created_at}</p>
                        </div>
                        <div>
                            <p>{this.starsify(this.props.review.rating)}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p>{this.props.review.body}</p>
                    </div>
                </div>
                <div>
                    <img src={this.props.product.photoURL} alt=""/>
                    <p>{this.props.product.name}</p>
                </div>
            </div>
                
        );
    }
}

export default Review;