import { Component } from 'react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';

import { AppContainer } from './App.styled';

export default class App extends Component {
  state = {
    data: [],
    search: '',
    page: 1,
  };

  handleSubmit = search => {
    this.setState({ data: [], search, page: 1 });
  };

  handleClick = () =>
    this.setState(prevState => ({ page: prevState.page + 1 }));

  updateData = newData =>
    this.setState(prevState => ({ data: [...prevState.data, ...newData] }));

  render() {
    const { search, page, data } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          search={search}
          page={page}
          data={data}
          updateData={this.updateData}
        />
        {data.length > 0 && <Button onClick={this.handleClick} />}
      </AppContainer>
    );
  }
}
