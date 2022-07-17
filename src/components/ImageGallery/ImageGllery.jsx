import axios from 'axios';
import { Component } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export default class ImageGallery extends Component {
  state = {
    status: 'resolved',
  };

  async componentDidUpdate(prevProps) {
    const { search, page, updateData } = this.props;

    if (prevProps.search !== search || prevProps.page !== page) {
      try {
        const data = await axios.get('https://pixabay.com/api/', {
          params: {
            key: '27389649-f5df395754432ead8290902de',
            q: search,
            page: page,
            per_page: 12,
          },
        });

        if (data.data.hits.length === 0) {
          this.setState({ status: 'rejected' });
          return;
        }

        this.setState({ status: 'resolved' });
        updateData(data.data.hits);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    if (this.state.status === 'rejected') {
      return <p>Sorry, we find nothing. Try again</p>;
    }

    if (this.state.status === 'resolved') {
      return (
        <Gallery>
          {this.props.data.map(({ id, webformatURL }) => (
            <ImageGalleryItem key={id} content={webformatURL} />
          ))}
        </Gallery>
      );
    }
  }
}
