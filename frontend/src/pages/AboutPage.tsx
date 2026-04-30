export default function AboutPage() {
    return (
        <section className="page">
            <div className="page-header">
                <span className="card-tag">About the project</span>
                <h1>How it works</h1>
                <p>
                    This project combines rule-based reasoning with map and economy
                    analysis to generate CS2 advice.
                </p>
            </div>

            <div className="about-grid">
                <div className="glass-card">
                    <h3>Position subsystem</h3>
                    <p>
                        The positioning part uses a React map interface where the user marks
                        teammates, likely enemy positions, smokes, molotovs, view angles and
                        weapon context.
                    </p>
                </div>

                <div className="glass-card">
                    <h3>Heuristic layer</h3>
                    <p>
                        Python analysis can evaluate visibility, coverage, danger zones and
                        candidate positions, then produce scores for valid tactical spots.
                    </p>
                </div>

                <div className="glass-card">
                    <h3>KBS layer</h3>
                    <p>
                        Rule-based logic removes bad options, applies tactical constraints
                        and ranks the best recommendations with explanations.
                    </p>
                </div>

                <div className="glass-card">
                    <h3>Economy subsystem</h3>
                    <p>
                        The economy part uses side, score, round history, money, weapons,
                        role, confidence and other player/team inputs to recommend what to
                        buy.
                    </p>
                </div>
            </div>

            <div className="glass-card">
                <h3>Pipeline</h3>
                <p>
                    Frontend input → analysis/heuristics → KBS elimination →
                    scoring/ranking → recommendation output.
                </p>
            </div>
        </section>
    )
}