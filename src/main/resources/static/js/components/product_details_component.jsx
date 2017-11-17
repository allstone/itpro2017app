var ProductDetailsComponent = function(props) {
  return (
    <div>
      <div className="media">
        <div className="media-left">
          <img className="media-object" src={props.product.image} alt="..."/>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{props.product.title}</h4>
          <p>{props.product.description}</p>
          <p>{props.product.isInStock}</p>
          <p>Price: {props.product.price} Eur</p>
        </div>
      </div>
      <div className="help-text"/>
      <div style={{ paddingTop: '10px' }}>
        <button style={{ marginRight: '10px' }} className="btn btn-success" onClick={props.onAddToCart}>To cart</button>
        <button style={{ marginRight: '10px' }} className="btn btn-default" onClick={props.onBack}>Back</button>
      </div>
    </div>
  );
};

ProductDetailsComponent.propTypes = {
  product: React.PropTypes.shape({
    image: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    quantity: React.PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: React.PropTypes.func.isRequired,
  onBack: React.PropTypes.func.isRequired,
};

window.ProductDetailsComponent = ProductDetailsComponent;
