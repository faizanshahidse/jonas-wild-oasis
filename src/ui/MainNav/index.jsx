import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from 'react-icons/hi2';
import NavLinks from '../NavLinks';
import styles from './MainNav.module.scss';

function MainNav() {
  return (
    <nav>
      <ul className={styles.nav__list}>
        <li>
          <NavLinks to="/dashboard">
            <HiOutlineHome className={styles.nav__item__svg} />
            <span>Home</span>
          </NavLinks>
        </li>

        <li>
          <NavLinks to="/bookings">
            <HiOutlineCalendarDays className={styles.nav__item__svg} />
            <span>Bookings</span>
          </NavLinks>
        </li>

        <li>
          <NavLinks to="/cabins">
            <HiOutlineHomeModern className={styles.nav__item__svg} />
            <span>Cabins</span>
          </NavLinks>
        </li>

        <li>
          <NavLinks to="/users">
            <HiOutlineUsers className={styles.nav__item__svg} />
            <span>Users</span>
          </NavLinks>
        </li>

        <li>
          <NavLinks to="/settings">
            <HiOutlineCog6Tooth className={styles.nav__item__svg} />
            <span>Settings</span>
          </NavLinks>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
