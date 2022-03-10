import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
    if (localStorage.getItem("TAIKHOAN")
        && localStorage.getItem("MATKHAU")
        && localStorage.getItem("USER_TOKEN")) {
        return true
    }
    return false
    // const user = { loggedIn: false }
    // return user && user.loggedIn
}

const ProtectedRoutes = () => {
    const isAuthent = useAuth();
    console.log("isAuthent", isAuthent)
    return isAuthent ? <Outlet /> : <Navigate to="/dangnhap" />;
}

export default ProtectedRoutes