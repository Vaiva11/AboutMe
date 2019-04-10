import React from 'react';
import './index.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    };
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      firstName: event.target.firstName,
      lastName: event.target.lastName,
      email: event.target.email,
      message: event.target.message,
    });
  };

  onSubmit = () => {
    const { firstName, lastName, email, message } = this.state;
    fetch('http://localhost:3001/email', {
      method: 'POST',
      body: JSON.stringify({
        test: 'hello',
        firstName,
        lastName,
        email,
        message,
      }),
    });
  };

  render() {
    const { firstName } = this.state;
    const { lastName } = this.state;
    const { email } = this.state;
    const { message } = this.state;

    return (
      <div className="contactContainer">
        <h1>Contact Me</h1>
        <section id="form">
          <form>
            <ul>
              <li>
                <label>Full name</label>
                <span id="fullName">
                  <input
                    type="text"
                    firstName={firstName}
                    id="firstName"
                    placeholder="First"
                  />
                  <input
                    type="text"
                    lastName={lastName}
                    id="lastName"
                    placeholder="Last"
                  />
                </span>
              </li>
              <li>
                <label>Email</label>
                <input type="email" email={email} id="email" />
              </li>
              <li>
                <label>Message</label>
                <textarea
                  type="text"
                  message={message}
                  id="message"
                  onChange={this.handleChange}
                />
              </li>
            </ul>
            <button type="button" onClick={this.onSubmit}>
              Submit
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default Contact;
