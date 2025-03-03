import { Outlet } from 'react-router';
import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './AppLayout.module.scss';

function AppLayout() {
  return (
    <div className={styles.top}>
      <Header />
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
