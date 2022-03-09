import { Routes, Route } from "react-router-dom"
import 'antd/dist/antd.css';

import Login from "./ui-component/login/Login"
import CreateUser from "./ui-component/create-user/CreateUser"
import GetListUser from "./ui-component/get-list-user/GetListUser"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/getListUser" element={<GetListUser />} />
      </Routes>
    </div>
  );
}

export default App;
