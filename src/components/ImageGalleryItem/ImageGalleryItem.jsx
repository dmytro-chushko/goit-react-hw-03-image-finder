import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, id, alt, getModalImage }) => (
  <GalleryItem>
    <GalleryItemImage src={image} alt={alt} onClick={() => getModalImage(id)} />
  </GalleryItem>
);

export default ImageGalleryItem;
