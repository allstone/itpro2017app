var Link = ReactRouter.Link;

var ProductAdministrationComponent = React.createClass({

  render: function() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input className="form-control" value={this.props.product.title} onChange={this.props.onFieldChange('title')} />
          </div>
          <div className="form-group">
            <label>Image url</label>
            <input className="form-control" value={this.props.product.image} onChange={this.props.onFieldChange('image')} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              value={this.props.product.description}
              onChange={this.props.onFieldChange('description')}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input className="form-control" value={this.props.product.price} onChange={this.props.onFieldChange('price')} />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              className="form-control"
              value={this.props.product.quantity}
              onChange={this.props.onFieldChange('quantity')}
            />
          </div>

          <button className="btn btn-success" style={{ marginRight: '20px' }} onClick={this.props.onSaveClick}>Save</button>
          <Link to="/admin/products" className="btn btn-default">Cancel</Link>
        </form>
      </div>);
  }
});

ProductAdministrationComponent.propTypes = {
  product: React.PropTypes.object.isRequired,
  onSaveClick: React.PropTypes.func.isRequired,
  onFieldChange: React.PropTypes.func.isRequired
};

window.ProductAdministrationComponent = ProductAdministrationComponent;
