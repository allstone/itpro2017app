var App = React.createClass({
  render: function() {
    return (
      <div style={{ paddingTop: '20px' }}>
        <NavigationComponent />
        {this.props.children}
      </div>
    );
  }
});

var Admin = React.createClass({
  render: function() {
    return <div>{this.props.children}</div>;
  }
});
var NoMatch = React.createClass({
  render: function() {
    return <div>Route did not match</div>;
  }
});



var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ProductListContainer} />
      <Route path="/cart-details" component={CartDetailsContainer} />
      <Route path="/products" component={ProductListContainer} />
      <Route path="/products/:productId" component={ProductDetailsContainer} />
      <Route path="/admin" component={Admin}>
        <IndexRoute component={ProductListAdministrationContainer} />
        <Route path="/admin/products" component={ProductListAdministrationContainer} />
        <Route path="/admin/products/:productId" component={ProductAdministrationContainer} />
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'));
