import { Route, Routes } from "react-router-dom";
import SingnIn from "./pages/SignIn/SignIn";
import Signup from "./pages/SignUp/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/signin" element={<SingnIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </main>
  );
}

export default App;
