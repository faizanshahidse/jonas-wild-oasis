import PropTypes from 'prop-types';

function Error({ children }) {
  return (
    <span style={{ fontSize: '1.4rem', color: 'var(--color-red-700)' }}>
      {children}
    </span>
  );
}

Error.propTypes = {
  children: PropTypes.any,
};

export default Error;
