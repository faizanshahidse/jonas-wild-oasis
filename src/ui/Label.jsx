import PropTypes from 'prop-types';

function Label({ htmlFor, children }) {
  return (
    <label style={{ fontWeight: '500' }} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.any,
};

export default Label;
