import PropTypes from 'prop-types';

import styles from './Form.module.scss';

function Form({ children, onSubmit }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.any,
  onSubmit: PropTypes.func,
};

export default Form;
