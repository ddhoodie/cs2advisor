import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import EconomyPage from './pages/EconomyPage'
import PositionPage from './pages/PositionPage'

export default function App() {
    return (
        <div className="app-shell">
            <Sidebar />
            <main className="content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/economy" element={<EconomyPage />} />
                    <Route path="/position" element={<PositionPage />} />
                </Routes>
            </main>
        </div>
    )
}