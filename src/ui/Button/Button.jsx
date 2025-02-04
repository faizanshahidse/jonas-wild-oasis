import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
