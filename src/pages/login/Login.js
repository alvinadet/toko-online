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
    rule: 2
  };
  postLogin = () => {
    axios
      .post('http://localhost:8000/api/people/login?include=user', {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        alert(res.data.user.role);
        this.setState({
          rule: res.data.user.role
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
    if (this.state.rule == 2) {
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
    } else if (this.state.rule == 1) {
      return (window.location.pathname = '/home');
    } else if (this.state.rule == 0) {
      return (window.location.pathname = '/admin/showBarang');
    }
    // return (
    //   <div>
    //     {this.state.rule == 2 ? (
    //       <Grid
    //         textAlign="center"
    //         style={{ height: '100%' }}
    //         verticalAlign="middle">
    //         <Grid.Column style={{ maxWidth: 450 }}>
    //           <Header as="h2" color="teal" textAlign="center">
    //             <Image src="https://image.flaticon.com/icons/svg/145/145867.svg" />
    //             Log-in to your account
    //           </Header>
    //           <Form size="large">
    //             <Segment stacked>
    //               <Form.Input
    //                 fluid
    //                 icon="user"
    //                 iconPosition="left"
    //                 placeholder="username"
    //                 value={this.state.username}
    //                 onChange={this.handleChange}
    //                 name="username"
    //               />
    //               <Form.Input
    //                 fluid
    //                 icon="lock"
    //                 iconPosition="left"
    //                 placeholder="Password"
    //                 type="password"
    //                 value={this.state.password}
    //                 onChange={this.handleChange}
    //                 name="password"
    //               />

    //               <Button
    //                 color="teal"
    //                 fluid
    //                 size="large"
    //                 onClick={() => this.postLogin()}>
    //                 Login
    //               </Button>
    //             </Segment>
    //           </Form>
    //         </Grid.Column>
    //       </Grid>
    //     ) : this.state.rule == 0 ? (
    //       (window.location.pathname = '')
    //     ) : (
    //       (window.location.pathname = '/admin/showBarang')
    //     )}
    //   </div>
    // );
  }
}
