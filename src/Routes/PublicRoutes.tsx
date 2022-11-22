import { Routes, Route } from 'react-router-dom';
import { Login } from '../Pages/Login';
import { Register } from '../Pages/Register';

export const PublicRoutes = () => {
    return (
        <div className="Rotas">
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </div>
    )
}