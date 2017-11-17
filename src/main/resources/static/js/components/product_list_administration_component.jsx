var Link = ReactRouter.Link;

var ProductListAdministrationComponent = React.createClass({
  render: function() {

    var itemsHtml = this.props.products.map(function(item, index) {
      var url = '/admin/products/' + item.id;
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td><img src={item.image} style={{ width: '50px' }}/></td>
          <td><Link to={url}>{item.title}</Link></td>
        </tr>
      );
    });
    return (
      <div>
        <Link className="btn btn-success" to="/admin/products/new">Add new product</Link>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {itemsHtml}
          </tbody>
        </table>
      </div>);
  }
});

ProductListAdministrationComponent.propTypes = {
  products: React.PropTypes.array.isRequired,
};

window.ProductListAdministrationComponent = ProductListAdministrationComponent;
