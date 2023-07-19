import PropTypes from 'prop-types'

function Input({ data, setFormInput }) {
  return (
    <input
      type={data === "Password" ? "password" : "text"}
      placeholder={data}
      className="Input"
      onChange={(e) =>
        setFormInput((prev) => {
          prev[data] = e.target.value;
          return prev;
        })
      }
    />
  );
}

Input.propTypes = {
  data: PropTypes.string,
  setFormInput: PropTypes.func
}

export default Input;
