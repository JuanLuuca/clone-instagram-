import { Routes, Route } from 'react-router-dom';
import { Home } from '../Pages/Home';

export const PrivateRoutes = () => {
    return (
        <div className="Rotas">
            <Routes>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
        </div>
    )
}