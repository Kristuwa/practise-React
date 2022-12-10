import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    photos: [],
    totalPages: 0,
    page: 1,
    query: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    // const {query, page}=
    const { page, query } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      const { photos, totalPages } = await ImageService.getImages(query, page);

      this.setState(prevState => {
        return { photos: [...prevState.photos, ...photos], totalPages };
      });
    }
  }
  getQuery = query => {
    this.setState({ query });
    console.log(query);
    console.log(this.state.query);
  };
  render() {
    return (
      <>
        <SearchForm getQuery={this.getQuery} />
        <Grid>
          {this.state.photos.map(photo => {
            return (
              <GridItem key={photo.id}>
                <CardItem>
                  <img src={photo.src.medium} alt={photo.alt} />
                </CardItem>
              </GridItem>
            );
          })}
        </Grid>

        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}
