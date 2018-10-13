import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuExampleHeader extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item header>Toko Online</Menu.Item>
        <Menu.Item
          name="aboutUs"
          active={activeItem === 'aboutUs'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Kategori"
          active={activeItem === 'Kategori'}
          onClick={this.handleItemClick}
        />

        <Menu.Item position="right">
          <Button color="red" as={Link} to="/login">
            Sign In
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button color="green">Sign Up</Button>
        </Menu.Item>
      </Menu>
    );
  }
}
