import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpComponent } from "./pages/signUpPage";
import { SignInComponent } from "./pages/signInPage";
import { LandingPage } from "./pages/landingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<LandingPage/>}/>
          <Route path="/signin" element={<SignInComponent />} />
          <Route path="/signup" element={<SignUpComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
