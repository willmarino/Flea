import React from 'react';

class Review extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div>
                <div>
                    <i className="fas fa-user"></i>
                </div>
                <div>
                    <div>
                        <p>Username</p>
                        <p>Date created</p>
                    </div>
                    <div>
                        <p>Rating</p>
                    </div>
                    <div>
                        Body
                    </div>
                </div>
                <div>
                    <p>Product Image</p>
                    <p>Product Name</p>
                </div>
            </div>
                
        );
    }
}

export default Review;