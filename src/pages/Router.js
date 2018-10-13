import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Cart } from './users/index';
import { adminHome, showBarang, tambahBarang, editBarang } from './admin/index';
import { navbarUser, navbarAdmin } from '../components/index';
import { Login } from './login';

export default class RouterAll extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" exact={true} component={navbarUser} />
          <Route path="/admin" component={navbarAdmin} />
        </Switch>

        <Switch>
          <Route path="/home" exact={true} component={Home} />
          <Route path="/home/cart/:id" component={Cart} />
          <Route path="/admin" exact={true} component={adminHome} />
          <Route path="/admin/showBarang" component={showBarang} />
          <Route path="/admin/tambahBarang" component={tambahBarang} />
          <Route path="/admin/editBarang/:id" component={editBarang} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}
