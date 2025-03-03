// import { useEffect } from 'react';
// import getCabins from '../../services/apiCabins';
import CabinTable from '../../features/cabins/CabinTable';
import CreateCabinForm from '../../features/cabins/CreateCabinForm';

function Cabins() {
  // useEffect(() => {
  //   async function fetchData() {
  //     const data = await getCabins();
  //     console.log(data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
      <div>All Cabins</div>
      <CabinTable />
      <CreateCabinForm />
    </>
  );
}

export default Cabins;
