var ProductListComponent = function(props) {
  var productCards = props.products.map(function (product, index) {
    return (
      <ProductCardComponent
        key={index}
        id={product.id}
        image={product.image}
        title={product.title}
        description={product.description}
        price={product.price}
        onDetailsClick={props.onDetailsClick}
      />
    );
  });
  return (<div className="row">{productCards}</div>);
};

ProductListComponent.propTypes = {
  products: React.PropTypes.array.isRequired,
  onDetailsClick: React.PropTypes.func.isRequired,
};

window.ProductListComponent = ProductListComponent;
