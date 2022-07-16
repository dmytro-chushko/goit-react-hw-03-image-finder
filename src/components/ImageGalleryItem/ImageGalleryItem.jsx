import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ content }) => (
  <GalleryItem>
    <GalleryItemImage src={content} alt="#" />
  </GalleryItem>
);

export default ImageGalleryItem;
