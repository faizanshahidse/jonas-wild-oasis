import { useQuery } from '@tanstack/react-query';
import styles from './CabinTable.module.scss';
import { getCabins } from '../../services/apiCabins';
import CabinRow from './CabinRow';

function CabinTable() {
  const {
    isPending,
    data: cabins,
    // error,
  } = useQuery({ queryKey: ['cabin'], queryFn: getCabins });
  if (isPending) return <p>Loading.....</p>;

  return (
    <div className={styles.table} role="table">
      <header className={styles.table__header} role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
      </header>
      {cabins?.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinTable;
