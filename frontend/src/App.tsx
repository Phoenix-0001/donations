import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpComponent } from "./pages/signUpPage";
import { SignInComponent } from "./pages/signInPage";
import { LandingPage } from "./pages/landingPage";
import { FirstInterPage } from "./pages/firstInter";
import { Dashboard } from "./pages/dashboard";
import { RecoilRoot } from "recoil";
import { CommunityLogin } from "./pages/communityLogin";
import { CommunityPage } from "./pages/commPage";

function App() {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignInComponent />} />
            <Route path="/signup" element={<SignUpComponent />} />
            <Route path="/firstInter" element={<FirstInterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/communitylogin" element={<CommunityLogin />} />
            <Route path="/commPage" element={<CommunityPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
