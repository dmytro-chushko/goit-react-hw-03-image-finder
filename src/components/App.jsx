import { Component } from 'react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';

import { AppContainer } from './App.styled';

export default class App extends Component {
  state = {
    search: '',
    page: 1,
  };

  handleSubmit = search => {
    this.setState({ search });
  };

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery options={this.state} />
      </AppContainer>
    );
  }
}
