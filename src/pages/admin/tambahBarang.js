import React, { Component } from 'react';
import { Button, Checkbox, Form, Container } from 'semantic-ui-react';
import axios from 'axios';

export default class tambahBarang extends Component {
  state = {
    namaBarang: '',
    deskripsi: '',
    harga: 0,
    gambar: '',
    kategori: ''
  };

  addData = () => {
    axios
      .post('http://localhost:8000/api/barangs', {
        namaBarang: this.state.namaBarang,
        deskripsi: this.state.deskripsi,
        harga: this.state.harga,
        gambar: this.state.gambar,
        kategori: this.state.kategori
      })
      .then(res => {
        alert('berhasil!');
        this.setState({
          namaBarang: '',
          deskripsi: '',
          harga: '',
          gambar: '',
          kategori: ''
        });
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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
            />
          </Form.Field>
          <Form.Field>
            <label>Deskripsi</label>
            <input
              onChange={this.handleChange}
              placeholder="Deskripsi"
              name="deskripsi"
            />
          </Form.Field>
          <Form.Field>
            <label>Harga</label>
            <input
              onChange={this.handleChange}
              placeholder="Harga"
              name="harga"
            />
          </Form.Field>
          <Form.Field>
            <label>Gambar</label>
            <input
              onChange={this.handleChange}
              placeholder="URL"
              name="gambar"
            />
          </Form.Field>
          <Form.Field>
            <label>Kategori</label>
            <select
              name="kategori"
              onChange={this.handleChange}
              value={this.state.kategori}>
              <option selected={true} value="Laptop">
                Laptop
              </option>
              <option value="Aksesoris">Aksesoris</option>
            </select>
          </Form.Field>

          <Button type="submit" onClick={() => this.addData()}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}
