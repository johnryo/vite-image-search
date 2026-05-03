import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useGlobalContext } from '../context';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillSunFill className='toggle-icon' style={{ color: '#facc15' }} />
        ) : (
          <BsFillMoonFill
            className='toggle-icon'
            style={{ color: '#7c3aed' }}
          />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
