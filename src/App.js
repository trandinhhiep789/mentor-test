import { Routes, Route } from "react-router-dom"
import Login from "./ui-component/Login"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
