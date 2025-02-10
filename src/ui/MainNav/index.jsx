import { NavLink } from 'react-router';
import styles from './MainNav.module.scss';

function MainNav() {
  return (
    <nav>
      <ul className={styles.nav__list}>
        <li>
          <NavLink to="/dashboard">Home</NavLink>
        </li>
        <li>
          <NavLink to="/account">Bookings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
