var CartSummaryComponent = function(props) {
  return (
      <div>
        <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true">&nbsp;</span>
        {props.itemCount} items
      </div>
  );
};

CartSummaryComponent.propTypes = {
  itemCount: React.PropTypes.number.isRequired,
};

window.CartSummaryComponent = CartSummaryComponent;
