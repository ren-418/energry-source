import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import MainLayouts from "../layouts/MainLayouts"
import Login from "../pages/Login"
import Register from "../pages/Register"
import UnsupportedRegister from "../pages/UnsupportedRegister"
import Aboutus from "../pages/Aboutus"
import IndustriesWeWorkWith from "../pages/IndustriesWeWorkWith"
import OurPartnership from "../pages/OurParnership"

const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="layouts/home" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/unsupported-register" element={<UnsupportedRegister />} />
            <Route path="layouts" element={<MainLayouts />}>
                <Route path="home" element={<Home />} />
                <Route path="aboutus" element={<Aboutus />} />
                <Route path="industries-work-with" element={<IndustriesWeWorkWith />} />
                <Route path="ourpartnership" element={<OurPartnership />} />
            </Route>
        </Routes>
    )
}


export default Router