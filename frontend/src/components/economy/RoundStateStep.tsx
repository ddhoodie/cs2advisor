import type { EconomyFormState, Side, YesNo } from './economyTypes'

export default function RoundStateStep({
                                           form,
                                           setForm,
                                       }: {
    form: EconomyFormState
    setForm: React.Dispatch<React.SetStateAction<EconomyFormState>>
}) {
    return (
        <div className="glass-card section-card">
            <div className="section-heading">
                <div>
                    <span className="card-tag">Round State</span>
                    <h2>General round context</h2>
                </div>
                <p>Start with the basic state of the round.</p>
            </div>

            <div className="form-grid two-col">
                <label>
                    Side
                    <select
                        value={form.side}
                        onChange={(e) =>
                            setForm((prev) => ({ ...prev, side: e.target.value as Side }))
                        }
                    >
                        <option>CT</option>
                        <option>T</option>
                    </select>
                </label>

                <label>
                    Score
                    <input
                        type="text"
                        placeholder="e.g. 8:6"
                        value={form.score}
                        onChange={(e) =>
                            setForm((prev) => ({ ...prev, score: e.target.value }))
                        }
                    />
                </label>

                <label>
                    Last round won?
                    <select
                        value={form.lastRoundWon}
                        onChange={(e) =>
                            setForm((prev) => ({
                                ...prev,
                                lastRoundWon: e.target.value as YesNo,
                            }))
                        }
                    >
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </label>

                <label>
                    Prelast round won?
                    <select
                        value={form.prelastRoundWon}
                        onChange={(e) =>
                            setForm((prev) => ({
                                ...prev,
                                prelastRoundWon: e.target.value as YesNo,
                            }))
                        }
                    >
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </label>
            </div>
        </div>
    )
}