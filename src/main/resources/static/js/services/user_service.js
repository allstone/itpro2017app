
var UserService = function() {

  this.setUsername = function(username) {
    localStorage.setItem('username', username);
  };

  this.getUsername = function() {
    return localStorage.getItem('username') || '';
  };
};

window.UserService = new UserService();
