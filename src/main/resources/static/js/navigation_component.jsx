var Link = window.ReactRouter.Link;

var NavLink = function(props, context) {
  var isActive = context.router.isActive(props.to);
  var className = isActive ? 'active' : '';

  return (
    <li className={className}>
      <Link {...props}>
        {props.children}
      </Link>
    </li>
    );
};

NavLink.contextTypes = {
  router: React.PropTypes.object,
};
NavLink.propTypes = {
  children: React.PropTypes.node.isRequired,
  to: React.PropTypes.string.isRequired,
};

var CartSummaryContainer = window.CartSummaryContainer;
var UsernameComponent = window.UsernameComponent;

var NavigationComponent = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <NavLink to="/products" onlyActiveOnIndex>Home</NavLink>
            <NavLink to="/admin">Admin</NavLink>
          </ul>
          <form className="navbar-form navbar-left">
            <UsernameComponent />
          </form>
          <ul className="nav navbar-nav navbar-right">
            <NavLink to="/cart-details"> <CartSummaryContainer /></NavLink>
          </ul>
        </div>
      </nav>
    );
  }
});

window.NavigationComponent = NavigationComponent;
