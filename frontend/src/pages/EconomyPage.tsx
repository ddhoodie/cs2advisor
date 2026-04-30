import { useMemo, useState } from 'react'
import EconomyStepper from '../components/economy/EconomyStepper'
import RoundStateStep from '../components/economy/RoundStateStep'
import { createInitialEconomyState } from '../components/economy/economyData'
import type { EconomyFormState } from '../components/economy/economyTypes'
import TeamStateStep from '../components/economy/TeamStateStep'
import PlayerStateStep from '../components/economy/PlayerStateStep'
import PlaystyleStep from '../components/economy/PlaystyleStep'
import ReviewPanel from '../components/economy/ReviewPanel'

export default function EconomyPage() {
    const [currentStep, setCurrentStep] = useState(0)
    const [form, setForm] = useState<EconomyFormState>(createInitialEconomyState())

    const faceitOrEloLabel = useMemo(() => {
        const value = Number(form.faceitOrElo)
        if (!form.faceitOrElo.trim() || Number.isNaN(value)) {
            return 'Type 1–10 for Faceit or 100+ for Elo'
        }
        if (value >= 1 && value <= 10) return 'Detected as Faceit level'
        if (value >= 100) return 'Detected as Elo'
        return 'Enter 1–10 or 100+'
    }, [form.faceitOrElo])

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4))
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

    return (
        <section className="page">
            <div className="page-header">
                <span className="card-tag">Subsystem</span>
                <h1>Economy Advisor</h1>
                <p>Step-by-step input flow for cleaner economy advice.</p>
            </div>

            <EconomyStepper currentStep={currentStep} onStepChange={setCurrentStep} />

            <div className="wizard-layout">
                <div className="wizard-main">
                    {currentStep === 0 && <RoundStateStep form={form} setForm={setForm} />}

                    {currentStep === 1 && <TeamStateStep form={form} setForm={setForm} />}

                    {currentStep === 2 && (
                        <PlayerStateStep
                            form={form}
                            setForm={setForm}
                            faceitOrEloLabel={faceitOrEloLabel}
                        />
                    )}

                    {currentStep === 3 && <PlaystyleStep form={form} setForm={setForm} />}

                    {currentStep === 4 && (
                        <ReviewPanel form={form} faceitOrEloLabel={faceitOrEloLabel} />
                    )}

                    <div className="wizard-actions">
                        <button
                            type="button"
                            className="secondary-btn"
                            onClick={prevStep}
                            disabled={currentStep === 0}
                        >
                            Back
                        </button>

                        {currentStep < 4 ? (
                            <button type="button" className="primary-btn" onClick={nextStep}>
                                Continue
                            </button>
                        ) : (
                            <button type="button" className="primary-btn">
                                Analyze economy
                            </button>
                        )}
                    </div>
                </div>

                <aside className="wizard-sidebar">
                    <div className="glass-card sticky-card">
                        <span className="card-tag">Quick Summary</span>
                        <h3>Current input</h3>

                        <div className="summary-list">
                            <div className="summary-row">
                                <span>Side</span>
                                <strong>{form.side}</strong>
                            </div>
                            <div className="summary-row">
                                <span>Score</span>
                                <strong>{form.score || '—'}</strong>
                            </div>
                            <div className="summary-row">
                                <span>Last round</span>
                                <strong>{form.lastRoundWon}</strong>
                            </div>
                            <div className="summary-row">
                                <span>Prelast</span>
                                <strong>{form.prelastRoundWon}</strong>
                            </div>
                            <div className="summary-row">
                                <span>Confidence</span>
                                <strong>{form.confidence}</strong>
                            </div>
                            <div className="summary-row">
                                <span>Faceit/Elo</span>
                                <strong>{form.faceitOrElo || '—'}</strong>
                            </div>
                        </div>

                        <div className="sidebar-note">{faceitOrEloLabel}</div>
                    </div>
                </aside>
            </div>
        </section>
    )
}