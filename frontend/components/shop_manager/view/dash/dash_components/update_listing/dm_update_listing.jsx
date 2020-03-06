import React from 'react';

class DMListingsUpdate extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      name : '',
      price : '',
      category: '',
      amount : '',
      imageUrl : '',
      imageFile : null
    }
    this.isStateFilled = false;
    this.fillState = this.fillState.bind(this);
    this.handleImageRead = this.handleImageRead.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    debugger;
    if(!this.props.product){
      debugger;
      this.props.fetchProduct(this.props.curProdId)
        .then(() => {
          debugger;
          this.fillState();
        })
    }
  }

  componentDidUpdate(){
    debugger;
    if(!this.isStateFilled && this.props.product){
      debugger;
      this.isStateFilled = true;
      this.fillState();
    }
  }

  fillState(){
    let { product } = this.props;
    this.setState({ 
      name: product.name,
      price: product.price,
      category: product.high_level_category,
      amount: product.stock_amt
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('product[name]', this.state.name);
    formData.append('product[price]', this.state.price);
    formData.append('product[category]', this.state.category);
    formData.append('product[amount]', this.state.amount);
    // formData.append('product[shop_id]', this.props.shop.id);
    if(this.state.imageFile){
      formData.append('product[photo]', this.state.imageFile);
    }
    debugger;
    this.props.updateShopProduct(this.props.curProdId, formData)
      .then(() => {
        this.props.history.push('/shops-manager/listings');
      })
  }

  handleImageRead(e){
    e.preventDefault();
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      debugger;
      this.setState({ imageUrl : reader.result, imageFile : file });
    }
    debugger;
    if(file){
      reader.readAsDataURL(file);
      debugger;
    }else{
      this.setState({ imageUrl : '', imageFile : null });
      debugger;
    }
    debugger;
  }

  update(field){
    return e => {
      this.setState({ [ field ] : e.currentTarget.value });
    }
  }

  render(){
    debugger;
    if(!this.props.product){
      return <p>loading</p>;
    }
    debugger;
    return(
      <div className="add-listing-container">
        <h2>Add Listing</h2>
        <form action="" onSubmit={this.handleSubmit}>
          <p>image file</p>
          <input type="file" onChange={this.handleImageRead}/>
          <p>name</p>
          <input type="text" onChange={this.update('name')} value={this.state.name}/>
          <p>price</p>
          <input type="text" onChange={this.update('price')} value={this.state.price}/>
          <p>category</p>
          <input type="text" onChange={this.update('category')} value={this.state.category}/>
          <p>amount in stock</p>
          <input type="text" onChange={this.update('amount')} value={this.state.amount}/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

export default DMListingsUpdate;