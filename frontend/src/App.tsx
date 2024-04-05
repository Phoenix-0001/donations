import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpComponent } from "./pages/signUpPage";
import { SignInComponent } from "./pages/signInPage";
import { LandingPage } from "./pages/landingPage";
import { FirstInterPage } from "./pages/firstInter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInComponent />} />
          <Route path="/signup" element={<SignUpComponent />} />
          <Route path="/firstInter" element={<FirstInterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
