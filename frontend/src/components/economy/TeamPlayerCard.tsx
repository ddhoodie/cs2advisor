import { gunOptions, secondaryOptions, utilityOptions } from './economyData'
import type {
    Side,
    TeamSlot,
    ArmorOption,
    MainGunOption,
    SecondaryOption,
    UtilityOption,
} from './economyTypes'

export default function TeamPlayerCard({
                                           index,
                                           slot,
                                           side,
                                           title,
                                           subtitle,
                                           onChange,
                                       }: {
    index: number
    slot: TeamSlot
    side: Side
    title: string
    subtitle: string
    onChange: (index: number, next: TeamSlot) => void
}) {
    const toggleUtility = (item: UtilityOption) => {
        const exists = slot.utility.includes(item)
        const nextUtility = exists
            ? slot.utility.filter((u) => u !== item)
            : [...slot.utility, item]

        onChange(index, { ...slot, utility: nextUtility })
    }

    return (
        <div className="team-slot-card">
            <div className="team-slot-header">
                <div>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                </div>
                <span className="slot-badge">Player {index + 1}</span>
            </div>

            <div className="team-slot-grid">
                <label>
                    Armor
                    <select
                        value={slot.armor}
                        onChange={(e) =>
                            onChange(index, {
                                ...slot,
                                armor: e.target.value as ArmorOption,
                            })
                        }
                    >
                        <option>No armor</option>
                        <option>Kevlar</option>
                        <option>Kevlar + Helmet</option>
                    </select>
                </label>

                <label>
                    Main gun
                    <select
                        value={slot.mainGun}
                        onChange={(e) =>
                            onChange(index, {
                                ...slot,
                                mainGun: e.target.value as MainGunOption,
                            })
                        }
                    >
                        {gunOptions.map((gun) => (
                            <option key={gun} value={gun}>
                                {gun || 'None'}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Secondary
                    <select
                        value={slot.secondary}
                        onChange={(e) =>
                            onChange(index, {
                                ...slot,
                                secondary: e.target.value as SecondaryOption,
                            })
                        }
                    >
                        {secondaryOptions.map((gun) => (
                            <option key={gun} value={gun}>
                                {gun || 'None'}
                            </option>
                        ))}
                    </select>
                </label>

                {side === 'CT' ? (
                    <label className="checkbox-inline">
                        <span>Defuse kit</span>
                        <input
                            type="checkbox"
                            checked={slot.kit}
                            onChange={(e) =>
                                onChange(index, {
                                    ...slot,
                                    kit: e.target.checked,
                                })
                            }
                        />
                    </label>
                ) : (
                    <div className="fake-field">
                        <span>Defuse kit</span>
                        <div className="disabled-field">T side — not applicable</div>
                    </div>
                )}

                <label>
                    Money
                    <input
                        type="number"
                        placeholder="e.g. 4200"
                        value={slot.money}
                        onChange={(e) =>
                            onChange(index, {
                                ...slot,
                                money: e.target.value,
                            })
                        }
                    />
                </label>
            </div>

            <div className="utility-block">
                <span className="utility-label">Utility</span>
                <div className="chip-row">
                    {utilityOptions
                        .filter((u) => (side === 'CT' ? true : u !== 'Incendiary'))
                        .map((item) => {
                            const active = slot.utility.includes(item)

                            return (
                                <button
                                    key={item}
                                    type="button"
                                    className={active ? 'chip active' : 'chip'}
                                    onClick={() => toggleUtility(item)}
                                >
                                    {item}
                                </button>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}