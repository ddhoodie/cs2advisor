import TeamPlayerCard from './TeamPlayerCard'
import type { EconomyFormState } from './economyTypes'

export default function TeamStateStep({
                                          form,
                                          setForm,
                                      }: {
    form: EconomyFormState
    setForm: React.Dispatch<React.SetStateAction<EconomyFormState>>
}) {
    const updateSlot = (index: number, nextSlot: EconomyFormState['teamSlots'][number]) => {
        setForm((prev) => ({
            ...prev,
            teamSlots: prev.teamSlots.map((slot, i) => (i === index ? nextSlot : slot)),
        }))
    }

    return (
        <div className="glass-card section-card">
            <div className="section-heading">
                <div>
                    <span className="card-tag">Team State</span>
                    <h2>Five player slots</h2>
                </div>
                <p>
                    Slot 1 is your carried-over gear if you survived. Slots 2–5 are teammates
                    after they have fully finished buying.
                </p>
            </div>

            <div className="team-slot-stack">
                <TeamPlayerCard
                    index={0}
                    slot={form.teamSlots[0]}
                    side={form.side}
                    title="Your carried gear"
                    subtitle="Use this slot for what you kept if you survived the previous round. Money stays current."
                    onChange={updateSlot}
                />

                {form.teamSlots.slice(1).map((slot, idx) => (
                    <TeamPlayerCard
                        key={idx + 1}
                        index={idx + 1}
                        slot={slot}
                        side={form.side}
                        title={`Teammate ${idx + 1}`}
                        subtitle="State after this teammate has decided what to buy and fully finished purchase."
                        onChange={updateSlot}
                    />
                ))}
            </div>
        </div>
    )
}