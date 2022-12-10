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
  async componentDidMount() {
    const { photos, totalPages } = await ImageService.getImages('cars');
    console.log(photos);
    console.log(totalPages);
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
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      </>
    );
  }
}
