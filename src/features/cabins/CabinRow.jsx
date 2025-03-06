import PropTypes from 'prop-types';

import styles from './CabinRow.module.scss';
import { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import { useDeleteCabin } from './hooks/useDeleteCabin';
function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);

  const {
    id: cabinId,
    image,
    name,
    max_capacity,
    regular_price,
    discount,
  } = cabin;

  const { isPending, mutate } = useDeleteCabin();

  return (
    <>
      <div className={styles.row} role="row">
        <img className={styles.cabin__img} src={image} />
        <div>{name}</div>
        <div>Fits up to {max_capacity} guests</div>
        <div>{regular_price}</div>
        <div>{discount}</div>
        <button onClick={() => setShowForm(true)}>Edit</button>
        <button onClick={() => mutate(cabinId)} disabled={isPending}>
          Delete
        </button>
      </div>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

CabinRow.propTypes = {
  cabin: PropTypes.checkPropTypes({
    id: PropTypes.number,
    image: PropTypes.any,
    name: PropTypes.string,
    max_capacity: PropTypes.number,
    regular_price: PropTypes.number,
    discount: PropTypes.number,
  }),
};

export default CabinRow;
