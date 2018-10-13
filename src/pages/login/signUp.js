import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react';
import axios from 'axios';

import './login.css';

export default class Login extends Component {
  state = {
    data: [],
    username: '',
    password: '',
    rule: 2,
    action: false,
    email: ''
  };
  postLogin = () => {
    axios
      .post('http://localhost:8000/api/people', {
        username: this.state.username,
        password: this.state.password,
        role: this.state.rule,
        email: this.state.email
      })
      .then(res => {
        alert('berhasil');
        this.setState({
          action: true
        });
      });
    console.log(this.state.rule);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    if (this.state.action == false) {
      return (
        <div>
          <Grid
            textAlign="center"
            style={{ height: '100%' }}
            verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" color="teal" textAlign="center">
                <Image src="https://image.flaticon.com/icons/svg/145/145867.svg" />
                Log-in to your account
              </Header>
              <Form size="large">
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    name="username"
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    name="password"
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    name="email"
                  />
                  <Form.Input>
                    <select
                      value={this.state.rule}
                      onChange={this.handleChange}
                      name="rule">
                      <option value="0">Admin</option>
                      <option value="1">User</option>
                    </select>
                  </Form.Input>

                  <Button
                    color="teal"
                    fluid
                    size="large"
                    onClick={() => this.postLogin()}>
                    Login
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      );
    } else if (this.state.action == true) {
      return (window.location.pathname = '/home');
    }
  }
}
