import { Formik } from 'formik';
import { FcSearch } from 'react-icons/fc';
import {
  Header,
  SearchForm,
  SearchFormInput,
  SearchButton,
  SearchButtonLabel,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ search }, { resetForm }) => {
    onSubmit(search);
    resetForm();
  };

  return (
    <Header>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <SearchForm>
          <SearchButton type="submit">
            <FcSearch size={24} />
            <SearchButtonLabel>Search</SearchButtonLabel>
          </SearchButton>
          <SearchFormInput
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};

export default Searchbar;