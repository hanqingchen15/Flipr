import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fname: '',
      lname: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = {email: 'asff', password: '123456'};
    this.props.loginDemo(demoUser);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return ( (this.props.formType === 'login') ? (
      <div className="sessionform">
        <div className="login-box">
          <div className="logo"><Link to="/">flipr</Link></div>
          <form onSubmit={this.handleSubmit}>
            <p className="errors">{this.renderErrors()}</p>
            <h3 className="login-message">Welcome Back!</h3>
            <label>Email:
              <input type="text" value={this.state.email} onChange={this.update('email')} />
            </label>
            <label>Password:
              <input type="password" value={this.state.password} onChange={this.update('password')} />
            </label>
            <button type="submit">Log In!</button>
            <button onClick={this.handleDemo}>Demo</button>
          </form>
          <p className="alreadyhas">Need an account?</p>
          <Link to="/signup">Click Here!</Link>
        </div>
      </div>
    ) : (
      <div className="sessionform">
        <div className="login-box">
          <div className="logo"><Link to="/">flipr</Link></div>
          <form onSubmit={this.handleSubmit}>
            <p className="errors">{this.renderErrors()}</p>
            <h3 className="login-message">Sign Up Here!</h3>
            <label>Email:
              <input type="text" value={this.state.email} onChange={this.update('email')} />
            </label>
            <label>Password:
              <input type="password" value={this.state.password} onChange={this.update('password')} />
            </label>
            <label>First Name:
              <input type="text" value={this.state.fname} onChange={this.update('fname')} />
            </label>
            <label>Last Name:
              <input type="text" value={this.state.lname} onChange={this.update('lname')} />
            </label>
            <button type="submit">Create Account</button>
            <button onClick={this.handleDemo}>Demo</button>
          </form>
          <p className="alreadyhas">Already have an account?</p>
          <Link to="/login">Login here!</Link>
        </div>
      </div>
    )
  );
  }
}

export default withRouter(SessionForm);
