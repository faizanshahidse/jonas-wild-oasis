import Logo from '../Logo';
import MainNav from '../MainNav';
import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <aside className={styles.top}>
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
