import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import FormFunctions from "./Components/FormFunctions";
import NavBar from "./Components/NavBar/NavBar";
import Chat from "./screens/Chat";
import { Login } from "./screens/Register/Login";

function App() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [FormInput, setFormInput] = useState({
    Email: "",
    Username: "",
    Password: "",
  });
  const Forms = ["Register", "Login"];
  return (
    <>
      <NavBar />
      <Routes>
        {Forms.map((type, key) => (
          <Route
            path={"/" + type.toLowerCase()}
            key={key}
            element={
              <Login
                error={error}
                FormInput={FormInput}
                setFormInput={setFormInput}
                type={type}
                FormFunction={() =>
                  FormFunctions(type, setError, navigate, FormInput)
                }
              />
            }
          />
        ))}

        <Route path="chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
