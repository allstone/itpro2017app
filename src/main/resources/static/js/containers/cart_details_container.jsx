var UserService = window.UserService;
var EventEmitter = window.EventEmitter;
var CartDetailsContainer = React.createClass({

  getInitialState: function() {
    return {
      items: []
    };
  },

  componentDidMount: function() {
    var self = this;
    axios.get('/api/users/' + UserService.getUsername() + '/cart-products').then(function(response) {
      self.setState({
        items: response.data
      });
    });
  },

  handleItemRemove: function(item) {
    var self = this;
    return function() {
      axios.delete('/api/users/' + UserService.getUsername() + '/cart-products/' + item.id).then(function(response) {
        self.setState({
          items: response.data
        });
        EventEmitter.publish({ eventType: 'RemoveFromCart' });
      });
    };
  },

  render: function() {
    return <CartDetailsComponent items={this.state.items} onItemRemove={this.handleItemRemove} />;
  }
});

window.CartDetailsContainer = CartDetailsContainer;
