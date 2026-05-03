import { toast } from 'sonner';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) {
      toast.error('Please provide a search term');
      return;
    }
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className='title'>Find your image</h1>
      <form onSubmit={handleSubmit} className='search-form'>
        <input
          type='text'
          name='search'
          placeholder='cat'
          className='form-input search-input'
        />
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
