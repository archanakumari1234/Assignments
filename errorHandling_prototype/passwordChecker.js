/*     Password Checker.
Create a class called User with properties username and password. Implement a getter method for password
that returns the password with all characters replaced by asterisks. Implement a setter method for password
that checks if the new password is at least 8 characters long and contains at least one number and one
uppercase letter. If the password is valid, set the new password. If not, log an error message.  */



class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    // Getter method for password
    get password() {
      // Replace all characters with asterisks
      return '*'.repeat(this._password.length);
    }
  
    // Setter method for password
    set password(newPassword) {
      if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
        // Password is valid, set the new password
        this._password = newPassword;
        console.log('Password updated successfully.');
      } else {
        // Password is not valid, log an error message
        console.error('Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
      }
    }
  }
  
  // Create an instance of the User class
  const user = new User('myuser', 'oldP@ssw0rd');
  
  // Get the password (masked)
  console.log('Password:', user.password); // Outputs: "Password: ********"
  
  // Set a new valid password
  user.password = 'newP@ssw0rd'; // Outputs: "Password updated successfully."
  
  // Set an invalid password
  user.password = 'short'; // Outputs: "Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter."
  