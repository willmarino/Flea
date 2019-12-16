import React from 'react';

class IndexRow extends React.Component{
    constructor(props){
        super(props);

        this.categories = [
            "Gifts",
            "Jewelry & Accessories",
            "Clothing & Shoes",
            "Home & Living",
            "Wedding & Party",
            "Toys & Entertainment",
            "Arts & Collectibles",
            "Craft Supplies",
            "Vintage"
        ];
    }

    render(){
        // fetch 6 items of x category - we have products in state, so we can just call a filter on products or filter them in a container.
        return(

        );
    }
}

export default IndexRow;