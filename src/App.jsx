import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </main>
  );
}

export default App;
