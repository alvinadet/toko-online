import React, { Component } from 'react';
import {
  Grid,
  Segment,
  Container,
  Image,
  GridColumn,
  Card,
  Icon,
  Button
} from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Home extends Component {
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

  componentDidMount() {
    this.getData();
  }
  render() {
    const extra = (
      <a>
        <Icon name="user" />
        16 Friends
      </a>
    );
    return (
      <div>
        <Container>
          <Grid columns={2} divided>
            <Grid.Row stretched>
              <Grid.Column width={12}>
                <Segment>
                  <img
                    src="https://cf.shopee.co.id/file/f283880a9a45e252695efdda72a18c62"
                    style={{ width: '100%' }}
                  />
                </Segment>
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment>
                  <img
                    src="https://images.indianexpress.com/2018/02/samsung_galaxys9_new6.jpg"
                    style={{ width: '100%' }}
                  />
                </Segment>
                <Segment>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wwD5bvGJem8rjbTMwB9j7svZESuRRzlkaB6HgYdVAuP4TpcR7A"
                    style={{ width: '100%' }}
                  />
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Segment>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <h3>Semua Barang :</h3>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment>
            <Grid>
              <Grid.Row columns={3}>
                {this.state.data.map(datum => {
                  return (
                    <Grid.Column style={{ marginBottom: 20 }}>
                      <Card>
                        <Image
                          src={datum.gambar}
                          style={{ width: 300, height: 300 }}
                        />
                        <Card.Content>
                          <Card.Header>{datum.namaBarang}</Card.Header>
                          <Card.Meta>
                            Harga Rp:
                            {datum.harga}
                          </Card.Meta>
                          <Card.Meta>Stok :{datum.stok}</Card.Meta>
                          <Card.Description>{datum.deskripsi}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                          <Button
                            color="green"
                            as={Link}
                            to={`/home/cart/${datum.id}`}>
                            Beli
                          </Button>
                        </Card.Content>
                      </Card>
                    </Grid.Column>
                  );
                })}
              </Grid.Row>
            </Grid>
          </Segment>
          <div style={{ textAlign: 'center' }}>
            <Segment>
              <iframe
                width="679"
                height="382"
                src="https://www.youtube.com/embed/zQrFzYG8pe4"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              />
            </Segment>
          </div>
        </Container>
      </div>
    );
  }
}
