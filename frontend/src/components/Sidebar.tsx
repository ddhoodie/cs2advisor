import { NavLink } from 'react-router-dom'

const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-link active' : 'nav-link'

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div>
                <div className="sidebar-logo">
                    <div className="logo-box">CS2</div>
                    <div>
                        <h1>CS2 Advisor</h1>
                        <p>Positioning and economy system</p>
                    </div>
                </div>

                <nav className="sidebar-nav">
                    <NavLink to="/" className={navClass}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={navClass}>
                        About
                    </NavLink>
                    <NavLink to="/economy" className={navClass}>
                        Economy Advisor
                    </NavLink>
                    <NavLink to="/position" className={navClass}>
                        Position Advisor
                    </NavLink>
                </nav>
            </div>

            <div className="sidebar-footer-card">
                <span className="footer-label">Prototype</span>
                <strong>Rule-based CS2 assistant</strong>
            </div>
        </aside>
    )
}