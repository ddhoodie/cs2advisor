export default function PositionPage() {
    return (
        <section className="page">
            <div className="page-header">
                <span className="card-tag">Subsystem</span>
                <h1>Position Advisor</h1>
                <p>
                    UI shell for the positioning recommendation system. Later this page
                    can connect to the interactive map and analysis backend.
                </p>
            </div>

            <div className="position-layout">
                <div className="glass-card map-card">
                    <div className="map-toolbar">
                        <button className="tool-btn" type="button">Teammate</button>
                        <button className="tool-btn" type="button">Enemy</button>
                        <button className="tool-btn" type="button">Smoke</button>
                        <button className="tool-btn" type="button">Molotov</button>
                        <button className="tool-btn" type="button">View angle</button>
                    </div>

                    <div className="mock-map">
                        <div className="site site-a">A</div>
                        <div className="site site-b">B</div>
                        <div className="lane lane-1" />
                        <div className="lane lane-2" />
                        <div className="lane lane-3" />
                        <div className="map-label top-left">Map canvas placeholder</div>
                    </div>
                </div>

                <div className="side-panel">
                    <div className="glass-card">
                        <h3>Inputs</h3>
                        <p>Teammates, enemy info, utility, weapons, economy and angles.</p>
                    </div>

                    <div className="glass-card">
                        <h3>Expected output</h3>
                        <p>
                            Best 3 positions, action recommendation and explanation for each.
                        </p>
                    </div>

                    <div className="glass-card">
                        <h3>Action</h3>
                        <button className="primary-btn full-width" type="button">
                            Analyze position
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}