// constants/spells.ts
export interface Spell {
  name: string;
  damageDie: string; // e.g., "1d8", "1d10"
  attackType: 'melee' | 'ranged'; // Spells can have attack rolls
}

export const SPELLS: Spell[] = [
  { name: "Fire Bolt", damageDie: "1d10", attackType: "ranged" },
  { name: "Ray of Frost", damageDie: "1d8", attackType: "ranged" },
  { name: "Shocking Grasp", damageDie: "1d8", attackType: "melee" },
  { name: "Poison Spray", damageDie: "1d12", attackType: "melee" }, // Often a save, but for simplicity here as an attack
  { name: "Acid Splash", damageDie: "1d6", attackType: "ranged" },
  { name: "Eldritch Blast", damageDie: "1d10", attackType: "ranged" },
  { name: "Sacred Flame", damageDie: "1d8", attackType: "ranged" }, // Often a save, but simplified
  { name: "Toll the Dead", damageDie: "1d8", attackType: "ranged" }, // Often a save, simplified
  { name: "Chill Touch", damageDie: "1d8", attackType: "ranged" },
  { name: "Produce Flame", damageDie: "1d8", attackType: "ranged" },

  { name: "Burning Hands", damageDie: "2d6", attackType: "ranged" }, // Cone, but often simplified to ranged spell attack
  { name: "Chromatic Orb", damageDie: "3d8", attackType: "ranged" },
  { name: "Guiding Bolt", damageDie: "4d6", attackType: "ranged" },
  { name: "Magic Missile", damageDie: "1d4 + 1", attackType: "ranged" }, // Each missile is 1d4+1, for simplicity just one entry
  { name: "Scorching Ray", damageDie: "2d6", attackType: "ranged" }, // Each ray is 2d6
  { name: "Spike Growth", damageDie: "2d4", attackType: "ranged" }, // Area damage, conceptualized as ranged
  { name: "Spiritual Weapon", damageDie: "1d8", attackType: "ranged" }, // Spirit makes melee spell attack
  { name: "Vampiric Touch", damageDie: "3d6", attackType: "melee" }, // Melee spell attack
  { name: "Call Lightning", damageDie: "3d10", attackType: "ranged" }, // Area damage, conceptualized as ranged
  { name: "Cone of Cold", damageDie: "8d8", attackType: "ranged" }, // Cone, considered ranged spell
  { name: "Finger of Death", damageDie: "7d8", attackType: "ranged" },
  { name: "Disintegrate", damageDie: "10d6", attackType: "ranged" },
  { name: "Chain Lightning", damageDie: "10d8", attackType: "ranged" },
  { name: "Fireball", damageDie: "8d6", attackType: "ranged" },
  { name: "Lightning Bolt", damageDie: "8d6", attackType: "ranged" },
  { name: "Ice Storm", damageDie: "2d8", attackType: "ranged" }, // Bludgeoning + 4d6 cold
  { name: "Cloudkill", damageDie: "5d8", attackType: "ranged" }, // Poison damage
  { name: "Sunbeam", damageDie: "6d8", attackType: "ranged" }, // Radiant damage
  { name: "Harm", damageDie: "14d6", attackType: "melee" }, // Necrotic damage, melee spell attack
  { name: "Inflict Wounds", damageDie: "3d10", attackType: "melee" },
  { name: "Melf's Acid Arrow", damageDie: "4d4", attackType: "ranged" }, // Plus 2d4 at end of next turn
  { name: "Shatter", damageDie: "3d8", attackType: "ranged" }, // Thunder damage
  { name: "Spirit Guardians", damageDie: "3d8", attackType: "ranged" }, // Radiant or necrotic damage
  { name: "Blight", damageDie: "8d8", attackType: "ranged" }, // Necrotic damage
  { name: "Contagion", damageDie: "0d0", attackType: "melee" }, // Disease, no direct damage (for simplicity, 0d0)
  { name: "Flame Strike", damageDie: "4d6", attackType: "ranged" }, // Fire + Radiant
  { name: "Wall of Fire", damageDie: "5d8", attackType: "ranged" }, // Fire damage
  { name: "Bigby's Hand (Clenched Fist)", damageDie: "4d8", attackType: "melee" }, // Force damage
  { name: "Circle of Death", damageDie: "8d6", attackType: "ranged" }, // Necrotic damage
  { name: "Delayed Blast Fireball", damageDie: "12d6", attackType: "ranged" },


  { name: "FAFO", damageDie: "20d20", attackType: "ranged" },
  { name: "Emotional Damage", damageDie: "3d6", attackType: "ranged" },

  //---42 total
];
