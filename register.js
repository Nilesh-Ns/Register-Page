function signup() {
    const username = $('#signup-username').val();
    const password = $('#signup-password').val();
  
    // Use jQuery AJAX to interact with PHP backend for MySQL
    $.ajax({
      type: 'POST',
      url: 'signup.php',
      data: { username: username, password: password },
      success: function(response) {
        alert(response);
      }
    });
  }
  
  function login() {
    const username = $('#login-username').val();
    const password = $('#login-password').val();
  
    // Use jQuery AJAX to interact with PHP backend for login and Redis for session
    $.ajax({
      type: 'POST',
      url: 'login.php',
      data: { username: username, password: password },
      success: function(response) {
        alert(response);
        // Handle successful login, set local storage, etc.
      }
    });
  }