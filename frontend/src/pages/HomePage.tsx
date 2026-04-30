import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <section className="page">
            <div className="hero-panel">
                <div className="hero-badge">Counter-Strike 2 Advisor</div>

                <h1 className="hero-title">
                    Tactical advice for
                    <br />
                    buying and positioning
                </h1>

                <p className="hero-text">
                    A CS2-focused advisor with two subsystems: one for economy decisions
                    and one for positioning and next-action recommendations.
                </p>

                <div className="hero-actions">
                    <Link to="/economy" className="primary-btn">
                        Economy Advisor
                    </Link>
                    <Link to="/position" className="secondary-btn">
                        Position Advisor
                    </Link>
                </div>
            </div>

            <div className="dashboard-grid">
                <div className="glass-card">
                    <span className="card-tag">Subsystem 1</span>
                    <h3>Economy</h3>
                    <p>
                        Buy recommendations based on side, money, team context, weapons,
                        player profile and buy-state rules.
                    </p>
                </div>

                <div className="glass-card">
                    <span className="card-tag">Subsystem 2</span>
                    <h3>Positioning</h3>
                    <p>
                        Position and action recommendations based on map state, teammates,
                        enemy info, utility and danger-zone reasoning.
                    </p>
                </div>

                <div className="glass-card">
                    <span className="card-tag">System</span>
                    <h3>Heuristics + KBS</h3>
                    <p>
                        Rule filtering before scoring, heuristic evaluation, then final
                        ranking and explanation.
                    </p>
                </div>
            </div>

            <div className="showcase-panel">
                <div className="showcase-left">
                    <span className="card-tag">Design</span>
                    <h2>Minimal, tactical, CS2-inspired</h2>
                    <p>
                        Dark UI, restrained orange highlights, compact panels and simple
                        structure so the app feels like a serious tool, not a game mockup.
                    </p>
                </div>

                <div className="stat-row">
                    <div className="stat-box">
                        <span>Economy</span>
                        <strong>Buy logic</strong>
                    </div>
                    <div className="stat-box">
                        <span>Positioning</span>
                        <strong>Map logic</strong>
                    </div>
                    <div className="stat-box">
                        <span>Engine</span>
                        <strong>KBS + heuristic</strong>
                    </div>
                </div>
            </div>
        </section>
    )
}