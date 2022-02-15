class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      password_confirmation: "",
      errors: {
        userName: "",
        password: "",
        password_confirmation: "",
      },
    };
  }
  handleChange = event => {
    let { name, value, type } = event.target;
    const isCheckbox = type === "checkbox";
    this.setState({
      [name]: isCheckbox ? event.target.checked : value,
    });
  };

  handleSubmit = event => {
    let { userName, password, password_confirmation } = this.state;
    event.preventDefault();

    if (this.validate()) {
      console.log(userName);
      console.log(password);
      console.log(password_confirmation);
    }
  };
  validate = () => {
    let { userName, password, password_confirmation } = this.state;
    let errors = this.state.errors;
    let isValid = true;

    if (!userName) {
      isValid = false;
      errors.userName = "username cannot be blank";
    }
    if (!password) {
      isValid = false;
      errors.password = "Please enter your password.";
    }
    if (!password_confirmation) {
      isValid = false;
      errors.password_confirmation = "Please enter your confirm password.";
    }

    if (
      typeof password !== "undefined" &&
      typeof errors.password_confirmation !== "undefiend"
    ) {
      if (password != password_confirmation) {
        isValid = false;
        errors.password_confirmation = "Passwords don't match.";
      }
    }
    this.setState({ errors }, () => {
      console.log(errors);
    });
    return isValid;
  };

  render() {
    let { userName, password, password_confirmation } = this.state;
    return (
      <form onSubmit={this.handleSubmit} class="form">
        <div class="form-control">
          <label htmlFor="userName" class="label">
            Username:
          </label>
          <input
            type="text"
            name="userName"
            placeholder="username"
            value={userName}
            onChange={this.handleChange}
          />
          <div class="validation-style ">{this.state.errors.userName}</div>

          <label htmlFor="password" class="label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
          <div class="validation-style ">{this.state.errors.password}</div>

          <label htmlFor="password_confirmation" class="label">
            Password_confirmation:
          </label>
          <input
            type="password"
            name="password_confirmation"
            placeholder="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
          <div class="validation-style form-control">
            {this.state.errors.password_confirmation}
          </div>
        </div>
        <button type="submit" class=" submitbtn">
          submit
        </button>
      </form>
    );
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(<UserForm />, domContainer);
