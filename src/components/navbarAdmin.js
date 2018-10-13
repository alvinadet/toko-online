import React, { Component } from 'react';
import { Menu, Button, Dropdown, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class MenuExampleHeader extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item header>
          <img src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        <Menu.Item
          name="Home"
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
          as={Link}
          to="/admin"
        />

        <Menu.Item
          name="Database"
          active={activeItem === 'Database'}
          onClick={this.handleItemClick}
          as={Link}
          to="/admin/showBarang"
        />

        <Menu.Item
          name="Tambah"
          active={activeItem === 'Tambah'}
          onClick={this.handleItemClick}
          as={Link}
          to="/admin/tambahBarang"
        />
        <Menu.Item position="right">Usename</Menu.Item>
        <Menu.Item>
          <Link to="/home">
            <Button color="red">Log Out</Button>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
