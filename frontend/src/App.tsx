import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpComponent } from "./pages/signInPage";
import { SignInComponent } from "./pages/signUpPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignUpComponent />} />
          <Route path="/signup" element={<SignInComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
