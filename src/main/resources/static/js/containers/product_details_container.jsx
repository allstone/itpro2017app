var EventEmitter = window.EventEmitter;
var UserService = window.UserService;

var ProductDetailsContainer = React.createClass({

  getInitialState: function() {
    return {
      product: {
        image: '',
        title: '',
        description: '',
        price: 0,
        quantity: 0,
      }
    };
  },

  componentDidMount: function() {
    var self = this;
    axios.get('/api/products/' + this.props.params.productId).then(function (response) {
      self.setState({ product: response.data });
    });
  },

  handleAddToCart: function() {
    var body = {
      id: this.state.product.id,
      image: this.state.product.image,
      title: this.state.product.title
    };
    axios.post('/api/users/' + UserService.getUsername() + '/cart-products', body).then(function() {
      EventEmitter.publish({ eventType: 'AddToCart' });
    });
  },

  handleBack: function() {
    this.context.router.push('/products');
  },

  render: function() {
    return (
        <ProductDetailsComponent
          product={this.state.product}
          onAddToCart={this.handleAddToCart}
          onBack={this.handleBack}
        />
    );
  }
});

ProductDetailsContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

window.ProductDetailsContainer = ProductDetailsContainer;
