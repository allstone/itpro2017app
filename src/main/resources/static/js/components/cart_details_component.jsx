var CartDetailsComponent = React.createClass({
  render: function() {
    var self = this;

    var itemsHtml = this.props.items.map(function(item, index) {
      return (
        <tr key={index}>
          <td><img className="media-object" src={item.image} style={{ width: '50px' }}/></td>
          <td>{item.title}</td>
          <td><button className="btn btn-danger" onClick={self.props.onItemRemove(item)}>Remove from cart</button></td>
        </tr>
      );
    });
    return (
      <div>
        <table className="table">
          <tbody>
            {itemsHtml}
          </tbody>
        </table>
      </div>);
  }
});

CartDetailsComponent.propTypes = {
  items: React.PropTypes.array.isRequired,
  onItemRemove: React.PropTypes.func.isRequired
};

window.CartDetailsComponent = CartDetailsComponent;
