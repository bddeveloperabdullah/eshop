import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import SingnIn from "./components/SignIn/SingnIn";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/signin" element={<SingnIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </main>
  );
}

export default App;
