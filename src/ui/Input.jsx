import PropTypes from 'prop-types';

function Input({ type, id }) {
  return (
    <input
      type={type}
      id={id}
      style={{
        padding: '0.8rem 1.2rem',
        border: '1px solid var(--color-grey-300)',
        backgroundColor: 'var(--color-grey-0)',
        borderRadius: 'var(--border-radius-sm)',
        boxShadow: 'var(--shadow-sm)',
      }}
    ></input>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.number,
};

export default Input;
