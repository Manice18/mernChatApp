import Input from "./Input";
import "./Form.css";
import FormExtra from "./FormExtra.png";
function Form({
  FormData,
  title,
  setFormInput,
  error,
  FormFunction,
}) {
  return (
    <div className="FormHolder">
      <div className="FormExtra">
        <div className="FormExtraBigText">
          <img
            src={FormExtra}
            className="formExtraImg"
            alt="formImg"
          />
          <div className="FormBigText">
            Join up to Chat with your mates !
          </div>
        </div>
      </div>
      <div className="Form">
        <b className="FormTitle">{title}</b>
        {FormData.map((data, index) => (
          <Input data={data} key={index} setFormInput={setFormInput} />
        ))}

        <button
          className="FormButton"
          onClick={() => {
            FormFunction();
          }}
        >
          {title}
        </button>
        {error && <div className="FormError">{error}</div>}
      </div>
    </div>
  );
}

export default Form;
