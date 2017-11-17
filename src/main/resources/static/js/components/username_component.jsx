var UsernameComponent = React.createClass({
  getInitialState: function() {
    return { username: '' };
  },

  componentDidMount: function() {
    this.setState({ username: UserService.getUsername() });
  },

  handleUsernameChange: function(e) {
    var username = e.target.value;
    this.setState({ username: username });
    UserService.setUsername(username);
  },

  render: function() {
    return (
      <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
    );
  }
});

window.UsernameComponent = UsernameComponent;
