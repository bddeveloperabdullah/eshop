import { Link, Route, Routes } from "react-router-dom";
import SingnIn from "./pages/SignIn/SignIn";
import Signup from "./pages/SignUp/SignUp";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import CheckOut from "./pages/Checkout/CheckOut";
import Home from "./pages/Home/Home";

function App() {
  return (
    <main>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SingnIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </main>
  );
}

export default App;
