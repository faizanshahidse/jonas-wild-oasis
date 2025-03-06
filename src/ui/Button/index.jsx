import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, variation, type, disabled }) => {
  const primary = variation === 'primary';
  const secondary = variation === 'secondary';
  const danger = variation === 'danger';

  return (
    <button
      className={`
        ${styles.btn} 
        ${primary && styles.primary}
        ${secondary && styles.secondary}
        ${danger && styles.danger}
      `}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  variation: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
