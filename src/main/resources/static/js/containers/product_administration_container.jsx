var ProductAdministrationContainer = React.createClass({

  getInitialState: function() {
    return {
      product: {
        title: '',
        image: '',
        description: '',
        price: '',
        quantity: ''
      }
    };
  },

  handleSaveClick: function(e) {
    e.preventDefault();
    var productId = this.props.params.productId;
    var self = this;
    if (productId === 'new') {
      axios.post('/api/products', this.state.product).then(function () {
        self.context.router.push('/admin/products');
      });
    } else {
      axios.put('/api/products/' + this.state.product.id, this.state.product).then(function() {
        self.context.router.push('/admin/products');
      });
    }
  },

  componentDidMount: function() {
    var self = this;
    var productId = this.props.params.productId;
    if (productId !== 'new') {
      axios.get('/api/products/' + productId).then(function (response) {
        self.setState({ product: response.data });
      });
    }
  },

  handleFieldChange: function(fieldName) {
    var self = this;
    return function(e) {
      var product = self.state.product;
      product[fieldName] = e.target.value;
      self.setState({ product: product });
    };
  },

  render: function() {
    return (
      <ProductAdministrationComponent
        product={this.state.product}
        onSaveClick={this.handleSaveClick}
        onFieldChange={this.handleFieldChange}
      />
    );
  }
});

ProductAdministrationContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

window.ProductAdministrationContainer = ProductAdministrationContainer;
