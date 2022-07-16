import axios from 'axios';
import { Component } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export default class ImageGallery extends Component {
  state = {
    data: [],
    idle: '',
    pending: '',
    resolved: '',
    rejected: '',
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.options !== this.props.options) {
      try {
        const data = await axios.get('https://pixabay.com/api/', {
          params: {
            key: '27389649-f5df395754432ead8290902de',
            q: this.props.options.search,
            page: this.props.options.page,
            per_page: 12,
          },
        });
        this.setState({ data: [...data.data.hits] });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    return (
      <Gallery>
        {this.state.data.map(({ id, webformatURL }) => (
          <ImageGalleryItem key={id} content={webformatURL} />
        ))}
      </Gallery>
    );
  }
}
