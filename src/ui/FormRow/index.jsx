import PropTypes from 'prop-types';

import styles from './FormRow.module.scss';
import Label from '../../ui/Label';
import Error from '../../ui/Error';

function FormRow({ label, error, children }) {
  return (
    <div className={styles.form_row}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </div>
  );
}

FormRow.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.any,
};

export default FormRow;
