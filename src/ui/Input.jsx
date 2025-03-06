import PropTypes from 'prop-types';

function Input({
  type,
  id,
  defaultValue,
  register,
  required,
  min,
  validate,
  // ...rest
}) {
  return (
    <input
      type={type}
      id={id}
      defaultValue={defaultValue}
      {...register(id, { required, min, validate })}
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
  id: PropTypes.string,
  defaultValue: PropTypes.any,
  register: PropTypes.func,
  required: PropTypes.string,
  min: PropTypes.object,
  validate: PropTypes.func,
};

export default Input;
