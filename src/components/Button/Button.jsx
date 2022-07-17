import { LoadMoreButton } from './Button.styled';

const Button = ({ onClick }) => (
  <LoadMoreButton type="button" onClick={onClick}>
    Load more
  </LoadMoreButton>
);

export default Button;
