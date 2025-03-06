import PropTypes from 'prop-types';

function Textarea({ id, register }) {
  return (
    <div>
      <textarea id={id} {...register(id)} />
    </div>
  );
}

Textarea.propTypes = {
  id: PropTypes.string,
  register: PropTypes.func,
};

export default Textarea;
