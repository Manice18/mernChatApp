import axios from "axios";
const url = "http://localhost:9000/";
const RegisterFunction = async (setError, navigate, FormInput) => {
  try {
    await axios.post(url + "register", FormInput);
    navigate("/login");
  } catch (error) {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
    )
      setError(error.response.data.message);
    else setError(error);
  }
};

const LoginFunction = async (setError, navigate, FormInput) => {
  try {
    const { data: res } = await axios.post(url + "login", {
      Email: FormInput.Email,
      Password: FormInput.Password,
    });
    localStorage.setItem("token", res.data);
    localStorage.setItem("user", res.user);
    navigate("/chat");
  } catch (error) {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
    )
      setError(error.response.data.message);
    else setError(error);
  }
};

const FormFunctions = (type, setError, navigate, FormInput) => {
  if (type === "Register")
    return RegisterFunction(setError, navigate, FormInput);
  else if (type === "Login")
    return LoginFunction(setError, navigate, FormInput);
};

export default FormFunctions;
