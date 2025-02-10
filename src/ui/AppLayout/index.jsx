import { Outlet } from 'react-router';
import Header from '../Header';
import Sidebar from '../Sidebar';
import styles from './AppLayout.module.scss';

function AppLayout() {
  return (
    <div>
      <div>App Layout...</div>
      <Header />
      <Sidebar />
      <main className={styles.outlet__container}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
