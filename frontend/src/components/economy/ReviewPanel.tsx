import type { EconomyFormState } from './economyTypes'

export default function ReviewPanel({
                                        form,
                                        faceitOrEloLabel,
                                    }: {
    form: EconomyFormState
    faceitOrEloLabel: string
}) {
    return (
        <div className="glass-card section-card">
            <div className="section-heading">
                <div>
                    <span className="card-tag">Review</span>
                    <h2>Check inputs before analysis</h2>
                </div>
                <p>Final overview of all entered economy inputs.</p>
            </div>

            <div className="review-grid">
                <div className="review-block">
                    <h3>Round State</h3>
                    <div className="summary-list">
                        <div className="summary-row"><span>Side</span><strong>{form.side}</strong></div>
                        <div className="summary-row"><span>Score</span><strong>{form.score || '—'}</strong></div>
                        <div className="summary-row"><span>Last round</span><strong>{form.lastRoundWon}</strong></div>
                        <div className="summary-row"><span>Prelast round</span><strong>{form.prelastRoundWon}</strong></div>
                    </div>
                </div>

                <div className="review-block">
                    <h3>Player State</h3>
                    <div className="summary-list">
                        <div className="summary-row"><span>KDA</span><strong>{form.kda || '—'}</strong></div>
                        <div className="summary-row"><span>Confidence</span><strong>{form.confidence}</strong></div>
                        <div className="summary-row"><span>HS %</span><strong>{form.hsPercentage || '—'}</strong></div>
                        <div className="summary-row"><span>Faceit/Elo</span><strong>{form.faceitOrElo || '—'}</strong></div>
                    </div>
                    <div className="sidebar-note">{faceitOrEloLabel}</div>
                </div>
            </div>

            <div className="review-block review-team-block">
                <h3>Team Slots</h3>
                <div className="review-team-list">
                    {form.teamSlots.map((slot, idx) => (
                        <div key={idx} className="review-team-card">
                            <div className="summary-row">
                                <span>Player</span>
                                <strong>{idx === 0 ? 'You' : `Teammate ${idx}`}</strong>
                            </div>
                            <div className="summary-row">
                                <span>Armor</span>
                                <strong>{slot.armor}</strong>
                            </div>
                            <div className="summary-row">
                                <span>Main gun</span>
                                <strong>{slot.mainGun || 'None'}</strong>
                            </div>
                            <div className="summary-row">
                                <span>Secondary</span>
                                <strong>{slot.secondary || 'None'}</strong>
                            </div>
                            <div className="summary-row">
                                <span>Kit</span>
                                <strong>{form.side === 'CT' ? (slot.kit ? 'Yes' : 'No') : 'N/A'}</strong>
                            </div>
                            <div className="summary-row">
                                <span>Utility</span>
                                <strong>{slot.utility.length ? slot.utility.join(', ') : 'None'}</strong>
                            </div>
                            <div className="summary-row">
                                <span>Money</span>
                                <strong>{slot.money || '—'}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="review-block">
                <h3>Playstyle</h3>
                <div className="summary-list">
                    {form.side === 'CT' ? (
                        <>
                            <div className="summary-row"><span>Range</span><strong>{form.preferredRange}</strong></div>
                            <div className="summary-row"><span>Role</span><strong>{form.ctRole}</strong></div>
                            <div className="summary-row"><span>Kits</span><strong>{form.ctKits || '—'}</strong></div>
                        </>
                    ) : (
                        <>
                            <div className="summary-row"><span>Entry</span><strong>{form.playEntry}</strong></div>
                            <div className="summary-row"><span>Lurk</span><strong>{form.playLurk}</strong></div>
                        </>
                    )}

                    <div className="summary-row">
                        <span>Utility usage</span>
                        <strong>{form.utilityUsage}</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}