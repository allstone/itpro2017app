var ProductListAdministrationComponent = window.ProductListAdministrationComponent;

var ProductListAdministrationContainer = React.createClass({

  getInitialState: function() {
    return { products: [] };
  },

  componentDidMount: function() {
    var self = this;
    axios.get('/api/products').then(function (response) {
      self.setState({ products: response.data });
    });
  },

  render: function() {
    return (
        <ProductListAdministrationComponent
          products={this.state.products}
        />
    );
  }
});

ProductListAdministrationComponent.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

window.ProductListAdministrationContainer = ProductListAdministrationContainer;
