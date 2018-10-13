import React, { Component } from 'react';
import { Button, Checkbox, Form, Container } from 'semantic-ui-react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class tambahBarang extends Component {
  state = {
    namaBarang: '',
    deskripsi: '',
    harga: 0,
    gambar: '',
    kategori: ''
  };

  getData = () => {
    axios
      .get(`http://localhost:8000/api/barangs/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          namaBarang: res.data.namaBarang,
          deskripsi: res.data.deskripsi,
          harga: res.data.harga,
          gambar: res.data.gambar,
          kategori: res.data.kategori
        });
      });
  };

  editData = () => {
    axios
      .patch(
        `http://localhost:8000/api/barangs/${this.props.match.params.id}`,
        {
          namaBarang: this.state.namaBarang,
          deskripsi: this.state.deskripsi,
          harga: this.state.harga,
          gambar: this.state.gambar,
          kategori: this.state.kategori
        }
      )
      .then(res => {
        window.location.pathname = '/admin/showBarang';
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <Container>
        <Form>
          <Form.Field>
            <label>Nama Barang</label>
            <input
              onChange={this.handleChange}
              placeholder="Nama Barang"
              name="namaBarang"
              value={this.state.namaBarang}
            />
          </Form.Field>
          <Form.Field>
            <label>Deskripsi</label>
            <input
              onChange={this.handleChange}
              placeholder="Deskripsi"
              name="deskripsi"
              value={this.state.deskripsi}
            />
          </Form.Field>
          <Form.Field>
            <label>Harga</label>
            <input
              onChange={this.handleChange}
              placeholder="Harga"
              name="harga"
              type="number"
              value={this.state.harga}
            />
          </Form.Field>
          <Form.Field>
            <label>Gambar</label>
            <input
              onChange={this.handleChange}
              placeholder="URL"
              name="gambar"
              value={this.state.gambar}
            />
          </Form.Field>
          <Form.Field>
            <label>Kategori</label>
            <select
              name="kategori"
              onChange={this.handleChange}
              value={this.state.kategori}>
              <option value="Handphone">Handphone</option>
              <option value="Laptop">Laptop</option>
              <option value="Aksesoris">Aksesoris</option>
            </select>
          </Form.Field>

          <Button type="submit" onClick={() => this.editData()}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
