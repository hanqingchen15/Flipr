import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo(e) {
    e.preventDefault();
    const demoUser = {email: 'asff', password: '123456'};
    this.props.loginDemo(demoUser).then(
      () => this.props.history.push('/explore')
    );
  };

  componentWillUnmount() {
    let removeBackground = $(".background");
    removeBackground.removeClass("background");
    removeBackground.addClass("backgroundHidden");
  }

  componentDidMount() {
    let addBackground = $(".backgroundHidden");
    addBackground.removeClass("backgroundHidden");
    addBackground.addClass("background");
  }

  render() {
    return (
      <div className="welcomeContainer">
        <div className="welcomeMessageContainer">
          <p className="welcomeTitle">Find Your Inspiration.</p>
          <p className="welcomeMessage">Join the Flipr community, home to tens of billions of photos and 2 million groups.</p>
        </div>
        <div className="welcomeButtons">
          <Link to="/signup">Sign Up</Link>
          <a className="splashDemo" onClick={this.handleDemo}>Demo</a>
        </div>
      </div>
    );
  }
}

export default Splash;
