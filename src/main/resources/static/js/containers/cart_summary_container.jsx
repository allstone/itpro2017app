var EventEmitter = window.EventEmitter;
var UserService = window.UserService;

var CartSummaryContainer = React.createClass({

  getInitialState: function() {
    return {
      itemCount: 0
    };
  },

  componentDidMount: function() {
    this.getAndUpdateCartItems();
    EventEmitter.subscribe(this, this.onCartEvent, 'AddToCart');
    EventEmitter.subscribe(this, this.onCartEvent, 'RemoveFromCart');
  },

  componentWillUnmount: function() {
    EventEmitter.unsubscribe(this);
  },

  onCartEvent: function() {
    this.getAndUpdateCartItems();
  },

  getAndUpdateCartItems: function() {
    var self = this;
    if (UserService.getUsername()) {
      axios.get('/api/users/' + UserService.getUsername() + '/cart-products').then(function (response) {
        self.setState({
          itemCount: response.data.length
        });
      });
    }
  },

  render: function() {
    return <CartSummaryComponent itemCount={this.state.itemCount} />;
  }
});

window.CartSummaryContainer = CartSummaryContainer;
