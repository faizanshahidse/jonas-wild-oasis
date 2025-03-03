import PropTypes from 'prop-types';

import styles from './FormRow.module.scss';

function FormRow({ label, children }) {
  return (
    <div className={styles.form_row}>
      <label htmlFor={children.props.id}>{label}</label>
      {children}
    </div>
  );
}

FormRow.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
};

export default FormRow;
