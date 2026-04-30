import type {
    EconomyFormState,
    MainGunOption,
    SecondaryOption,
    TeamSlot,
    UtilityOption,
} from './economyTypes'

export const createDefaultSlot = (): TeamSlot => ({
    armor: 'No armor',
    mainGun: '',
    secondary: '',
    kit: false,
    utility: [],
    money: '',
})

export const createInitialEconomyState = (): EconomyFormState => ({
    side: 'CT',
    score: '',
    lastRoundWon: 'Yes',
    prelastRoundWon: 'No',

    teamSlots: Array.from({ length: 5 }, () => createDefaultSlot()),

    kda: '',
    confidence: 60,
    hsPercentage: '',
    faceitOrElo: '',

    preferredRange: 'Mid',
    ctRole: 'Anchor',
    ctKits: '',
    playEntry: 'No',
    playLurk: 'No',
    utilityUsage: 'Average',
})

export const gunOptions: MainGunOption[] = [
    '',
    'AK-47',
    'M4A4',
    'M4A1-S',
    'FAMAS',
    'AUG',
    'Galil AR',
    'SG 553',
    'AWP',
    'SSG 08',
    'MAC-10',
    'MP9',
    'UMP-45',
    'P90',
    'Nova',
    'XM1014',
    'MAG-7',
    'Negev',
    'M249',
]

export const secondaryOptions: SecondaryOption[] = [
    '',
    'Glock-18',
    'USP-S',
    'P2000',
    'P250',
    'Five-SeveN',
    'Tec-9',
    'Desert Eagle',
    'Dual Berettas',
    'CZ75-Auto',
    'R8 Revolver',
]

export const utilityOptions: UtilityOption[] = [
    'Smoke',
    'Flashbang',
    'HE Grenade',
    'Molotov',
    'Incendiary',
]