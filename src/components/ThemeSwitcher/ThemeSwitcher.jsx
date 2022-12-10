import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { BsSun, BsFillMoonFill } from 'react-icons/bs';

const ThemeSwitcher = ({ themeTitle = 'light', toggleTheme = () => {} }) => {
  useEffect(() => {
    localStorage.setItem('theme-title', themeTitle);
  }, [themeTitle]);

  return (
    <button type="button" onClick={toggleTheme}>
      {themeTitle === 'light' ? (
        <BsSun size={30} color={'black'} />
      ) : (
        <BsFillMoonFill size={30} color={'black'} />
      )}
    </button>
  );
};

ThemeSwitcher.propTypes = {
  isLight: PropTypes.bool,
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeSwitcher;
