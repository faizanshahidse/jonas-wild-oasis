import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

import { deleteCabin } from '../../services/apiCabins';
import styles from './CabinRow.module.scss';
function CabinRow({ cabin }) {
  const {
    id: cabinId,
    image,
    name,
    max_capacity,
    regular_price,
    discount,
  } = cabin;

  const queryClient = useQueryClient();
  const { isPending, mutate, data } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success('Cabin successfully deleted!');
      queryClient.invalidateQueries({
        queryKey: ['cabin'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  console.log('deleted cabin......', data);

  return (
    <div className={styles.row} role="row">
      <img className={styles.cabin__img} src={image} />
      <div>{name}</div>
      <div>Fits up to {max_capacity} guests</div>
      <div>{regular_price}</div>
      <div>{discount}</div>
      <button onClick={() => mutate(cabinId)} disabled={isPending}>
        Delete
      </button>
    </div>
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
