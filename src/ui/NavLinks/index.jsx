import PropTypes from 'prop-types';
import { NavLink } from 'react-router';
import styles from './NavLinks.module.scss';

function NavLinks({ children, to }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `${styles.nav__item__navlink} ${isActive ? styles.nav__item__navlink__active : ''}`
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}

NavLinks.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
};

export default NavLinks;
