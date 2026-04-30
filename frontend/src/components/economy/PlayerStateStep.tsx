import type { EconomyFormState } from './economyTypes'

export default function PlayerStateStep({
                                            form,
                                            setForm,
                                            faceitOrEloLabel,
                                        }: {
    form: EconomyFormState
    setForm: React.Dispatch<React.SetStateAction<EconomyFormState>>
    faceitOrEloLabel: string
}) {
    return (
        <div className="glass-card section-card">
            <div className="section-heading">
                <div>
                    <span className="card-tag">Player State</span>
                    <h2>Your player profile</h2>
                </div>
                <p>These fields help shape risky vs disciplined buy advice.</p>
            </div>

            <div className="form-grid two-col">
                <label>
                    KDA
                    <input
                        type="text"
                        placeholder="e.g. 18 / 12 / 4"
                        value={form.kda}
                        onChange={(e) =>
                            setForm((prev) => ({ ...prev, kda: e.target.value }))
                        }
                    />
                </label>

                <label>
                    HS percentage
                    <input
                        type="number"
                        placeholder="e.g. 47"
                        value={form.hsPercentage}
                        onChange={(e) =>
                            setForm((prev) => ({ ...prev, hsPercentage: e.target.value }))
                        }
                    />
                </label>

                <label>
                    Confidence
                    <div className="range-wrap">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={form.confidence}
                            onChange={(e) =>
                                setForm((prev) => ({
                                    ...prev,
                                    confidence: Number(e.target.value),
                                }))
                            }
                        />
                        <div className="range-value">{form.confidence}</div>
                    </div>
                </label>

                <label>
                    Faceit level or Elo
                    <input
                        type="number"
                        placeholder="e.g. 8 or 1850"
                        value={form.faceitOrElo}
                        onChange={(e) =>
                            setForm((prev) => ({ ...prev, faceitOrElo: e.target.value }))
                        }
                    />
                    <small className="field-hint">{faceitOrEloLabel}</small>
                </label>
            </div>
        </div>
    )
}