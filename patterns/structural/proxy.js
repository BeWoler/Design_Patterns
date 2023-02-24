class UserAccess {
  open() {
    console.log("User authorized");
  }

  close() {
    console.log("User left");
  }
}

class SecuritySystem {
  constructor(user) {
    this.user = user;
  }

  open(password) {
    if (this.authenticate(password)) {
      this.user.open();
    } else {
      console.log("Access denied!");
    }
  }

  authenticate(password) {
    return password === "123456";
  }

  close() {
    this.user.close();
  }
}

const newUser = new SecuritySystem(new UserAccess());

newUser.open("12");
newUser.open("123456");
newUser.close();
