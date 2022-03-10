import { Routes, Route, NavLink } from "react-router-dom"
import 'antd/dist/antd.css';
import { Button, Space } from 'antd';
import ProtectedRoutes from "./router/ProtectedRoutes"

import Login from "./ui-component/login/Login"
import CreateUser from "./ui-component/create-user/CreateUser"
import GetListUser from "./ui-component/get-list-user/GetListUser"
import NotFound from "./ui-component/not-found/NotFound"


function App() {
  return (

    <div style={{ backgroundColor: "#e3f2fd", minHeight: "100vh" }}>
      <br />
      <div style={{ paddingLeft: "22px" }}>
        <Space>
          <Button type="primary">
            <NavLink to="/dangnhap">dangnhap</NavLink>
          </Button>
          <Button type="primary">
            <NavLink to="/laydanhsachnguoidung">laydanhsachnguoidung</NavLink>
          </Button>
          <Button type="primary"><NavLink to="/themnguoidung">themnguoidung</NavLink>
          </Button>
        </Space>
      </div>

      <Routes>
        <Route path="/dangnhap" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/laydanhsachnguoidung" element={<GetListUser />} />
          <Route path="/themnguoidung" element={<CreateUser />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
