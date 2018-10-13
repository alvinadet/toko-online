import React, { Component } from 'react';
import { Header, Table, Rating, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class showBarang extends Component {
  state = {
    data: []
  };

  getData = () => {
    axios.get('http://localhost:8000/api/barangs').then(res => {
      this.setState({
        data: res.data
      });
    });
  };

  deleteData = id => {
    alert(id);
    axios.delete(`http://localhost:8000/api/barangs/${id}`).then(res => {
      alert('Berhasil dihapus!');
      this.getData();
    });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID Barang</Table.HeaderCell>
            <Table.HeaderCell>Nama Barang</Table.HeaderCell>
            <Table.HeaderCell>Deskripsi</Table.HeaderCell>
            <Table.HeaderCell>Gambar</Table.HeaderCell>
            <Table.HeaderCell>Harga</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.data.map(datum => {
            return (
              <Table.Row>
                <Table.Cell>{datum.id}</Table.Cell>
                <Table.Cell>{datum.namaBarang}</Table.Cell>
                <Table.Cell>{datum.deskripsi}</Table.Cell>
                <Table.Cell>{datum.gambar}</Table.Cell>
                <Table.Cell>{datum.harga}</Table.Cell>
                <Table.Cell>{datum.kategori}</Table.Cell>
                <Table.Cell>
                  <Button
                    color="green"
                    as={Link}
                    to={`/admin/editBarang/${datum.id}`}>
                    Edit
                  </Button>
                  <Button color="red" onClick={() => this.deleteData(datum.id)}>
                    Hapus
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}
