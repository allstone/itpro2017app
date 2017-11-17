var ProductListContainer = React.createClass({

  getInitialState: function() {
    return {
      products: []
    };
  },

  componentDidMount: function() {
    var self = this;
    axios.get('/api/products').then(function (response) {
      self.setState({ products: response.data });
    });
  },

  handleDetailsClick: function(productId) {
    var self = this;
    //Return new function here because product_card_component assigns handler using onDetailsClick(productId)
    return function() {
      self.context.router.push('/products/' + productId);
    };
  },

  render: function() {
    return (
      <ProductListComponent
        products={this.state.products}
        onDetailsClick={this.handleDetailsClick}
      />);
  }
});

ProductListContainer.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

window.ProductListContainer = ProductListContainer;
