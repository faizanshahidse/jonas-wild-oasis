import PropTypes from 'prop-types';

import styles from './FileInput.module.scss';

function FileInput({ id, accept, register }) {
  return (
    <div>
      <input
        className={styles.file}
        type="file"
        id={id}
        accept={accept}
        {...register(id)}
      />
    </div>
  );
}

FileInput.propTypes = {
  id: PropTypes.string,
  accept: PropTypes.string,
  register: PropTypes.func,
};

export default FileInput;
