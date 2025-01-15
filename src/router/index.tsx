import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import MainLayouts from "../layouts/MainLayouts"
import Login from "../pages/Login"
import Register from "../pages/Register"
import UnsupportedRegister from "../pages/UnsupportedRegister"

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="layouts/home" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/unsupported-register" element={<UnsupportedRegister />} />
            <Route path="layouts" element={<MainLayouts />}>
                <Route path="home" element={<Home />} />
            </Route>
        </Routes>
    )
}


export default Router