type StepKey = 'round' | 'team' | 'player' | 'playstyle' | 'review'

const steps: { key: StepKey; label: string }[] = [
    { key: 'round', label: 'Round State' },
    { key: 'team', label: 'Team State' },
    { key: 'player', label: 'Player State' },
    { key: 'playstyle', label: 'Playstyle' },
    { key: 'review', label: 'Review' },
]

export default function EconomyStepper({
                                           currentStep,
                                           onStepChange,
                                       }: {
    currentStep: number
    onStepChange: (index: number) => void
}) {
    return (
        <div className="wizard-header">
            {steps.map((step, index) => {
                const isActive = index === currentStep
                const isDone = index < currentStep

                return (
                    <button
                        key={step.key}
                        type="button"
                        className={[
                            'wizard-step',
                            isActive ? 'active' : '',
                            isDone ? 'done' : '',
                        ].join(' ').trim()}
                        onClick={() => onStepChange(index)}
                    >
                        <span>{index + 1}</span>
                        <strong>{step.label}</strong>
                    </button>
                )
            })}
        </div>
    )
}