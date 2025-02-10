import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, variation }) => {
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
      type="button"
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  variation: 'primary',
};

Button.propTypes = {
  children: PropTypes.any,
  variation: PropTypes.string,
};

export default Button;
