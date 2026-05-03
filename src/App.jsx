import ThemeToggle from './components/ThemeToggle';
import SearchForm from './components/SearchForm';
import Gallery from './components/Gallery';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <main>
      <Toaster position='bottom-right' richColors />
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};

export default App;
