import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BallTriangle } from 'react-loader-spinner';
import { Component } from 'react';
import * as Scroll from 'react-scroll';

import getImageCollection from 'helpers/getImageCollection';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery, LoaderContainer, NotFound } from './ImageGallery.styled';

export default class ImageGallery extends Component {
  state = {
    status: 'resolved',
    panding: false,
  };

  async componentDidUpdate(prevProps) {
    const { search, page, loadMoreData } = this.props;

    try {
      if (prevProps.search !== search || prevProps.page !== page) {
        window.scrollBy(0, 600);
        this.setState({ panding: true });

        const data = await getImageCollection(search, page);

        this.setState({ panding: false });

        if (data) {
          if (data.length === 0) {
            this.setState({ status: 'rejected' });
            return;
          }

          loadMoreData(data);
          this.setState({ status: 'resolved' });
        }
        const scroll = Scroll.animateScroll;
        scroll.scrollToBottom();
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        {this.state.status === 'rejected' && (
          <NotFound>Sorry, we find nothing. Try another request</NotFound>
        )}

        {this.state.status === 'resolved' && (
          <Gallery>
            {this.props.data.map(({ id, webformatURL, tags }) => (
              <ImageGalleryItem
                key={id}
                image={webformatURL}
                id={id}
                alt={tags}
                getModalImage={this.props.getModalImage}
              />
            ))}
          </Gallery>
        )}
        {this.state.panding && (
          <LoaderContainer>
            <BallTriangle
              height="80"
              width="80"
              color="#3f51b5"
              ariaLabel="three-dots-loading"
            />
          </LoaderContainer>
        )}
      </>
    );
  }
}
