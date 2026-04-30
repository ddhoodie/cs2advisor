import type {
    CtRole,
    EconomyFormState,
    Range,
    UtilitySkill,
    YesNo,
} from './economyTypes'

export default function PlaystyleStep({
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
                    <span className="card-tag">Playstyle State</span>
                    <h2>How you usually play</h2>
                </div>
                <p>Show how the player naturally prefers to approach rounds.</p>
            </div>

            <div className="form-grid two-col">
                {form.side === 'CT' && (
                    <>
                        <label>
                            Preferred range
                            <select
                                value={form.preferredRange}
                                onChange={(e) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        preferredRange: e.target.value as Range,
                                    }))
                                }
                            >
                                <option>Close</option>
                                <option>Mid</option>
                                <option>Long</option>
                            </select>
                        </label>

                        <label>
                            CT role
                            <select
                                value={form.ctRole}
                                onChange={(e) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        ctRole: e.target.value as CtRole,
                                    }))
                                }
                            >
                                <option>Aggressive</option>
                                <option>Anchor</option>
                                <option>Rotator</option>
                            </select>
                        </label>

                        <label>
                            How many kits?
                            <input
                                type="number"
                                placeholder="e.g. 2"
                                value={form.ctKits}
                                onChange={(e) =>
                                    setForm((prev) => ({ ...prev, ctKits: e.target.value }))
                                }
                            />
                        </label>
                    </>
                )}

                {form.side === 'T' && (
                    <>
                        <label>
                            Play entry?
                            <select
                                value={form.playEntry}
                                onChange={(e) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        playEntry: e.target.value as YesNo,
                                    }))
                                }
                            >
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </label>

                        <label>
                            Play lurk?
                            <select
                                value={form.playLurk}
                                onChange={(e) =>
                                    setForm((prev) => ({
                                        ...prev,
                                        playLurk: e.target.value as YesNo,
                                    }))
                                }
                            >
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </label>
                    </>
                )}

                <label>
                    Be honest, do you use utility well?
                    <select
                        value={form.utilityUsage}
                        onChange={(e) =>
                            setForm((prev) => ({
                                ...prev,
                                utilityUsage: e.target.value as UtilitySkill,
                            }))
                        }
                    >
                        <option>Bad</option>
                        <option>Average</option>
                        <option>Good</option>
                    </select>
                </label>
            </div>
        </div>
    )
}