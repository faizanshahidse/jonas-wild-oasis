import PropTypes from 'prop-types';

import styles from './Form.module.scss';

function Form({ children }) {
  return <form className={styles.form}>{children}</form>;
}

Form.propTypes = {
  children: PropTypes.any,
};

export default Form;
