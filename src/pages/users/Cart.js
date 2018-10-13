import React, { Component } from 'react';
import {
  Grid,
  Segment,
  Container,
  Image,
  GridColumn,
  Card,
  Icon,
  Button,
  Form,
  Modal,
  Header
} from 'semantic-ui-react';
import axios from 'axios';

export default class Cart extends Component {
  state = {
    data: [],
    nama: '',
    namaLengkap: '',
    alamat: '',
    alamatLengkap: '',
    jumlahHarga: 0,
    jumlahBarang: 0,
    detail: false
  };

  getData = () => {
    axios
      .get(`http://localhost:8000/api/barangs/${this.props.match.params.id}`)
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data
        });
      });
  };
  approve = () => {
    if (this.state.jumlahBarang > this.state.data.stok) {
      return alert('kelebihan!');
    }
    axios.post('http://localhost:8000/api/itemPembelians', {
      jumlah: this.state.jumlahBarang,
      hargaTotal: this.state.jumlahHarga,
      barangId: this.state.data.id,
      pembelianId: 1
    });
    this.setState({
      jumlahHarga: this.state.jumlahBarang * this.state.data.harga,
      namaLengkap: this.state.nama,
      alamatLengkap: this.state.alamat,
      nomorLengkap: this.state.nomor,
      detail: true
    });
    console.log(this.state.jumlahHarga);
    this.getData();
  };
  delice = () => {
    alert('Gagal!');
    window.location.pathname = '/home';
  };
  componentDidMount() {
    this.getData();
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Container>
          <h1>Apakah Anda yakin akan Beli?</h1>
          <Segment>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column style={{ marginBottom: 20 }}>
                  <Card>
                    <Image src={this.state.data.gambar} />
                    <Card.Content>
                      <Card.Header>{this.state.data.namaBarang}</Card.Header>
                      <Card.Meta>
                        Harga Rp:
                        {this.state.data.harga}
                      </Card.Meta>
                      <Card.Meta>Stok :{this.state.data.stok}</Card.Meta>
                      <Card.Description>
                        <input
                          required
                          onChange={this.handleChange}
                          placeholder="jumlahBarang"
                          name="jumlahBarang"
                          type="number"
                          value={this.state.jumlahBarang}
                          min="1"
                          max={this.state.data.stok}
                        />
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Button color="green" onClick={() => this.approve()}>
                        Ya
                      </Button>
                      <Button color="red" onClick={() => this.delice()}>
                        Tidak
                      </Button>
                    </Card.Content>
                  </Card>
                </Grid.Column>

                <Grid.Column style={{ marginBottom: 20 }}>
                  <Form>
                    <Form.Field>
                      <label>Nama Lengkap</label>
                      <input
                        required={true}
                        onChange={this.handleChange}
                        placeholder="Nama Lengkap"
                        name="nama"
                        value={this.state.nama}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Alamat</label>
                      <input
                        required
                        onChange={this.handleChange}
                        placeholder="alamat"
                        name="alamat"
                        value={this.state.alamat}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>No HP</label>
                      <input
                        required
                        onChange={this.handleChange}
                        placeholder="No HP"
                        name="nomor"
                        type="number"
                        value={this.state.nomor}
                      />
                    </Form.Field>
                  </Form>
                </Grid.Column>
                {this.state.detail ? (
                  <Grid.Column>
                    <Form>
                      <Form.Field>
                        <label>Barang</label>
                        <label>{this.state.data.namaBarang}</label>
                      </Form.Field>
                      <Form.Field>
                        <label>Jumlah</label>
                        <label>
                          Rp
                          {this.state.jumlahHarga}
                        </label>
                      </Form.Field>
                      <Form.Field>
                        <label>Nama Lengkap</label>
                        <label>{this.state.namaLengkap}</label>
                      </Form.Field>
                      <Form.Field>
                        <label>Alamat</label>
                        <label>{this.state.alamatLengkap}</label>
                      </Form.Field>
                      <Form.Field>
                        <label>Nomor HP</label>
                        <label>{this.state.nomorLengkap}</label>
                      </Form.Field>
                      <Form.Field>
                        <label>
                          SILAHKAN KIRIM KE BCA 08447002847 a/n Alvin Adetya
                        </label>
                      </Form.Field>
                    </Form>
                  </Grid.Column>
                ) : (
                  <div />
                )}
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </div>
    );
  }
}
