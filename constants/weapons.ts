// constants/weapons.ts
export interface Weapon {
  name: string;
  damageDie: string; // e.g., "1d6", "2d4"
  type: 'simple' | 'martial';
  baseDamageModifier: number; // For non-magical weapons, usually 0
}

export const WEAPONS: Weapon[] = [
  // Simple Melee Weapons
  { name: "Club", damageDie: "1d4 (M)", type: "simple", baseDamageModifier: 0 },
  { name: "Dagger", damageDie: "1d4 (M, R20/60)", type: "simple", baseDamageModifier: 0 },
  { name: "Greatclub", damageDie: "1d8 (M)", type: "simple", baseDamageModifier: 0 },
  { name: "Handaxe", damageDie: "1d6 (M, R20/60)", type: "simple", baseDamageModifier: 0 },
  { name: "Javelin", damageDie: "1d6", type: "simple", baseDamageModifier: 0 },
  { name: "Light Hammer", damageDie: "1d4 (M, R20/60)", type: "simple", baseDamageModifier: 0 },
  { name: "Mace", damageDie: "1d6 (M)", type: "simple", baseDamageModifier: 0 },
  { name: "Quarterstaff", damageDie: "1d6 (M, V1d8)", type: "simple", baseDamageModifier: 0 },
  { name: "Sickle", damageDie: "1d4 (M)", type: "simple", baseDamageModifier: 0 },
  { name: "Spear", damageDie: "1d6 (M, R20/60, V1d8)", type: "simple", baseDamageModifier: 0 },

  // Simple Ranged Weapons
  { name: "Light Crossbow", damageDie: "1d8 (R80/320)", type: "simple", baseDamageModifier: 0 },
  { name: "Dart", damageDie: "1d4 (R20/60)", type: "simple", baseDamageModifier: 0 },
  { name: "Shortbow", damageDie: "1d6 (R80/320)", type: "simple", baseDamageModifier: 0 },
  { name: "Sling", damageDie: "1d4 (R30/120)", type: "simple", baseDamageModifier: 0 },

  // Martial Melee Weapons
  { name: "Battleaxe", damageDie: "1d8 (V1d10)", type: "martial", baseDamageModifier: 0 },
  { name: "Flail", damageDie: "1d8 (M)", type: "martial", baseDamageModifier: 0 },
  { name: "Glaive", damageDie: "1d10 (M)", type: "martial", baseDamageModifier: 0 },
  { name: "Greataxe", damageDie: "1d12 (M)", type: "martial", baseDamageModifier: 0 },
  { name: "Greatsword", damageDie: "2d6 (M)", type: "martial", baseDamageModifier: 0 },
  { name: "Halberd", damageDie: "1d10 (M)", type: "martial", baseDamageModifier: 0 },
  { name: "Lance", damageDie: "1d12, reach (M)", type: "martial", baseDamageModifier: 0 },
  { name: "Longsword", damageDie: "1d8 (V1d10)", type: "martial", baseDamageModifier: 0 },
  { name: "Maul", damageDie: "2d6 (M)", type: "martial", baseDamageModifier: 0 },
  { name: "Morningstar", damageDie: "1d8 (M)", type: "martial", baseDamageModifier: 0 },
  { name: "Pike", damageDie: "1d10, reach (M)", type: "martial", baseDamageModifier: 0 },
  { name: "Rapier", damageDie: "1d8 (M)", type: "martial", baseDamageModifier: 0 },
  { name: "Scimitar", damageDie: "1d6 (M)", type: "martial", baseDamageModifier: 0 },
  { name: "Shortsword", damageDie: "1d6 (M)", type: "martial", baseDamageModifier: 0 },
  { name: "Trident", damageDie: "1d8 (M, R20/60, V1d10)", type: "martial", baseDamageModifier: 0 },
  { name: "War Pick", damageDie: "1d8 (V1d10)", type: "martial", baseDamageModifier: 0 },
  { name: "Warhammer", damageDie: "1d8 (V1d10)", type: "martial", baseDamageModifier: 0 },
  { name: "Whip", damageDie: "1d4, reach (M)", type: "martial", baseDamageModifier: 0 },

  // Martial Ranged Weapons
  { name: "Blowgun", damageDie: "1 (R25/100)", type: "martial", baseDamageModifier: 0 }, // Represents 1 damage or negligible
  { name: "Hand Crossbow", damageDie: "1d6 (R30/120)", type: "martial", baseDamageModifier: 0 },
  { name: "Heavy Crossbow", damageDie: "1d10 (R100/400)", type: "martial", baseDamageModifier: 0 },
  { name: "Longbow", damageDie: "1d8 (R150/600)", type: "martial", baseDamageModifier: 0 },
  { name: "Musket", damageDie: "1d12 (R40/120)", type: "martial", baseDamageModifier: 0 },
  { name: "Pistol", damageDie: "1d10 (R30/90)", type: "martial", baseDamageModifier: 0 },


  // stupid weapons
  { name: "BFG", damageDie: "10d10", type: "martial", baseDamageModifier: 10 },
  { name: "Flaming Greatsword", damageDie: "2d6 slashing, 2d6 fire, (M)", type: "martial", baseDamageModifier: 0 },
  { name: "Flaming Whip", damageDie: "1d4 slashing 2d6 fire, reach, (M)", type: "martial", baseDamageModifier: 0 },

  //---41 total
];

// Function to generate magical versions of weapons
export function getMagicalWeapon(baseWeapon: Weapon, bonus: 1 | 2 | 3): Weapon {
  return {
    ...baseWeapon,
    name: `${baseWeapon.name} +${bonus}`,
    baseDamageModifier: bonus, // Magical bonus applies to damage
  };
}

export const ALL_WEAPONS: Weapon[] = [
  ...WEAPONS,
  ...WEAPONS.map(w => getMagicalWeapon(w, 1)),
  ...WEAPONS.map(w => getMagicalWeapon(w, 2)),
  ...WEAPONS.map(w => getMagicalWeapon(w, 3)),
];
