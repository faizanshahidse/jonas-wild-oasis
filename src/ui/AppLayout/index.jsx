import { Outlet } from 'react-router';
import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './AppLayout.module.scss';

function AppLayout() {
  return (
    <div className={styles.top}>
      <Header />
      <Sidebar />
      <main className={styles.outlet}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
