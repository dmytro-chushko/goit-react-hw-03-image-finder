import { Component } from 'react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Modal from './Modal';

import { AppContainer } from './App.styled';
import { ModalImage } from './Modal/Modal.styled';

export default class App extends Component {
  state = {
    data: [],
    search: '',
    page: 1,
    showModal: false,
    modalImage: {},
  };

  handleSubmit = search => {
    this.setState({ data: [], search, page: 1 });
  };

  handleClickLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  loadMoreData = newData =>
    this.setState(prevState => ({ data: [...prevState.data, ...newData] }));

  getModalImage = id => {
    const clickedImageObj = this.state.data.find(item => item.id === id);
    const { largeImageURL, tags } = clickedImageObj;
    this.setState({ modalImage: { largeImageURL, tags }, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { search, page, data, showModal } = this.state;
    const { largeImageURL, tags } = this.state.modalImage;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery
          search={search}
          page={page}
          data={data}
          loadMoreData={this.loadMoreData}
          getModalImage={this.getModalImage}
        />
        {data.length > 0 && <Button onClick={this.handleClickLoadMore} />}
        {showModal && (
          <Modal onClose={this.closeModal}>
            <ModalImage src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </AppContainer>
    );
  }
}
