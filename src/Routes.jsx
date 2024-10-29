import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import TentangKami from '@/pages/TentangKami';

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tentang-kami" element={<TentangKami />} />
            </Routes>
        </>
    );
}
