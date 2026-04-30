export type Side = 'CT' | 'T'
export type YesNo = 'Yes' | 'No'
export type ArmorOption = 'No armor' | 'Kevlar' | 'Kevlar + Helmet'
export type CtRole = 'Aggressive' | 'Anchor' | 'Rotator'
export type Range = 'Close' | 'Mid' | 'Long'
export type UtilitySkill = 'Bad' | 'Average' | 'Good'

export type MainGunOption =
    | ''
    | 'AK-47'
    | 'M4A4'
    | 'M4A1-S'
    | 'FAMAS'
    | 'AUG'
    | 'Galil AR'
    | 'SG 553'
    | 'AWP'
    | 'SSG 08'
    | 'MAC-10'
    | 'MP9'
    | 'UMP-45'
    | 'P90'
    | 'Nova'
    | 'XM1014'
    | 'MAG-7'
    | 'Negev'
    | 'M249'

export type SecondaryOption =
    | ''
    | 'Glock-18'
    | 'USP-S'
    | 'P2000'
    | 'P250'
    | 'Five-SeveN'
    | 'Tec-9'
    | 'Desert Eagle'
    | 'Dual Berettas'
    | 'CZ75-Auto'
    | 'R8 Revolver'

export type UtilityOption =
    | 'Smoke'
    | 'Flashbang'
    | 'HE Grenade'
    | 'Molotov'
    | 'Incendiary'

export type TeamSlot = {
    armor: ArmorOption
    mainGun: MainGunOption
    secondary: SecondaryOption
    kit: boolean
    utility: UtilityOption[]
    money: string
}

export type EconomyFormState = {
    side: Side
    score: string
    lastRoundWon: YesNo
    prelastRoundWon: YesNo

    teamSlots: TeamSlot[]

    kda: string
    confidence: number
    hsPercentage: string
    faceitOrElo: string

    preferredRange: Range
    ctRole: CtRole
    ctKits: string
    playEntry: YesNo
    playLurk: YesNo
    utilityUsage: UtilitySkill
}