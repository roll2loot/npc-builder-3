// lib/generateNPC.ts
import { ALL_WEAPONS, Weapon } from '../constants/weapons';
import { SPELLS, Spell } from '../constants/spells';
import { SPECIES, Species, CategorizedTraits } from '../constants/species';
import { FIRST_NAMES } from '../constants/namesFirst';
import { LAST_NAMES } from '../constants/namesLast';
import { GOALS } from '../constants/goals';
import { TRAITS } from '../constants/traits';
import { FLAWS } from '../constants/flaws';
import { REGIONS, Region } from '../constants/regions';
import { LOOT_ITEMS } from '../constants/lootItems';

// Define the structure of a generated NPC
export interface NPC {
  name: string;
  level: number;
  region: string;
  profession: string;
  species: string;
  physicalTraits: { // Changed to an object for categorized traits
    build: string;
    eyes: string;
    hair: string;
    notableFeatures: string[]; // Still an array for 1-2 features
  };
  stats: {
    STR: number;
    DEX: number;
    CON: number;
    INT: number;
    WIS: number;
    CHA: number;
  };
  statModifiers: {
    STR: number;
    DEX: number;
    CON: number;
    INT: number;
    WIS: number;
    CHA: number;
  };
  weapons: {
    weapon: Weapon;
    attackBonus: number;
    damage: string; // e.g., "1d6 + 4"
  }[];
  numAttacks: number; // Added number of attacks property
  spells: {
    spell: Spell;
    attackBonus: number;
    damage: string; // e.g., "1d8 + 3"
  }[];
  goal: string;
  characterTrait: string;
  flaw: string;
  loot: {
    items: string[];
    gold: number;
  };
}

/**
 * Rolls dice using the standard XdY format.
 * @param diceString e.g., "1d6", "2d4"
 * @returns The total sum of the rolls.
 */
function rollDice(diceString: string): number {
  const parts = diceString.split('d');
  const numDice = parseInt(parts[0], 10);
  const dieType = parseInt(parts[1], 10);
  let total = 0;
  for (let i = 0; i < numDice; i++) {
    total += Math.floor(Math.random() * dieType) + 1;
  }
  return total;
}

/**
 * Rolls 4d6 and drops the lowest, returning the sum of the highest three.
 * @returns An integer stat value (3-18).
 */
function rollStat(): number {
  const rolls = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
  ].sort((a, b) => a - b); // Sorts ascending
  return rolls[1] + rolls[2] + rolls[3]; // Sum the top three
}

/**
 * Calculates the D&D 5e style stat modifier.
 * @param statValue The raw stat score (e.e.g., 10, 15).
 * @returns The modifier (e.g., 0 for 10-11, +2 for 14-15).
 */
function calculateModifier(statValue: number): number {
  return Math.floor((statValue - 10) / 2);
}

/**
 * Calculates attack bonus based on level, proficiency, stat modifier, and weapon bonus.
 * Proficiency bonus increases with level: +2 (1-4), +3 (5-8), +4 (9-12), +5 (13-16), +6 (17-20).
 * Attack bonus increases by +1 every 2 levels on top of the base calculation.
 * @param level NPC level.
 * @param statModifier STR for melee, DEX for ranged.
 * @param weaponBonus Bonus from magical weapons (+1, +2, +3).
 * @returns The total attack bonus.
 */
function calculateAttackBonus(level: number, statModifier: number, weaponBonus: number = 0): number {
  let proficiencyBonus: number;
  if (level >= 17) proficiencyBonus = 6;
  else if (level >= 13) proficiencyBonus = 5;
  else if (level >= 9) proficiencyBonus = 4;
  else if (level >= 5) proficiencyBonus = 3;
  else proficiencyBonus = 2;

  const levelBonus = Math.floor((level - 1) / 2); // +1 every 2 levels, starting from level 1 (0 at level 1, +1 at level 3, etc.)
  return proficiencyBonus + statModifier + weaponBonus + levelBonus;
}

/**
 * Calculates damage based on dice, stat modifier, and weapon bonus.
 * Damage increases by +1 every 4 levels.
 * @param diceString e.g., "1d6", "2d4"
 * @param statModifier STR for melee, DEX for ranged.
 * @param weaponBonus Bonus from magical weapons.
 * @param level NPC level.
 * @returns Formatted damage string (e.g., "1d6 + 4").
 */
function calculateDamage(diceString: string, statModifier: number, weaponBonus: number = 0, level: number): string {
  const levelBonus = Math.floor((level - 1) / 4); // +1 every 4 levels, starting from level 1 (0 at level 1, +1 at level 5, etc.)
  const totalModifier = statModifier + weaponBonus + levelBonus;
  return `${diceString} + ${totalModifier}`;
}

/**
 * Helper to get a random element from an array.
 */
function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Generates a random NPC.
 * @param level The desired level of the NPC (1-20).
 * @param regionName The desired region for the NPC.
 * @returns A fully generated NPC object.
 */
export function generateNPC(level: number, regionName: string): NPC {
  // 1. Name
  const firstName = getRandomElement(FIRST_NAMES);
  const lastName = getRandomElement(LAST_NAMES);
  const name = `${firstName} ${lastName}`;

  // 2. Region and Profession
  const selectedRegion = REGIONS.find(r => r.name === regionName);
  if (!selectedRegion) {
    throw new Error(`Region '${regionName}' not found.`);
  }
  const profession = getRandomElement(selectedRegion.professions);

  // 3. Stats and Modifiers
  const stats = {
    STR: rollStat(),
    DEX: rollStat(),
    CON: rollStat(),
    INT: rollStat(),
    WIS: rollStat(),
    CHA: rollStat(),
  };

  const statModifiers = {
    STR: calculateModifier(stats.STR),
    DEX: calculateModifier(stats.DEX),
    CON: calculateModifier(stats.CON),
    INT: calculateModifier(stats.INT),
    WIS: calculateModifier(stats.WIS),
    CHA: calculateModifier(stats.CHA),
  };

  // 4. Species and Categorized Physical Traits
  const chosenSpecies = getRandomElement(SPECIES);
  const physicalTraits = {
    build: getRandomElement(chosenSpecies.traits.build),
    eyes: getRandomElement(chosenSpecies.traits.eyes),
    hair: getRandomElement(chosenSpecies.traits.hair),
    notableFeatures: [] as string[],
  };

  // Select 1 or 2 notable features
  const numNotableFeatures = Math.random() < 0.5 ? 1 : 2;
  const shuffledNotableFeatures = [...chosenSpecies.traits.notableFeatures].sort(() => 0.5 - Math.random());
  for (let i = 0; i < numNotableFeatures && i < shuffledNotableFeatures.length; i++) {
    physicalTraits.notableFeatures.push(shuffledNotableFeatures[i]);
  }

  // 5. Weapons (1 or 2)
  const numWeapons = Math.random() < 0.5 ? 1 : 2;
  const weapons: NPC['weapons'] = [];
  for (let i = 0; i < numWeapons; i++) {
    const randomWeapon = getRandomElement(ALL_WEAPONS);
    const isMelee = randomWeapon.type === 'simple' || randomWeapon.type === 'martial' && !['Light Crossbow', 'Dart', 'Shortbow', 'Sling', 'Blowgun', 'Hand Crossbow', 'Heavy Crossbow', 'Longbow', 'Net'].includes(randomWeapon.name.replace(/ \+\d/, '')); // Heuristic for melee vs ranged
    const relevantStatModifier = isMelee ? statModifiers.STR : statModifiers.DEX; // This is correct for weapons

    weapons.push({
      weapon: randomWeapon,
      attackBonus: calculateAttackBonus(level, relevantStatModifier, randomWeapon.baseDamageModifier),
      damage: calculateDamage(randomWeapon.damageDie, relevantStatModifier, randomWeapon.baseDamageModifier, level),
    });
  }

  // Calculate Number of Attacks: starts at 1, +1 every 5 levels
  const numAttacks = 1 + Math.floor((level - 1) / 5);

  // 6. Spells (1-3) - Now only 60% of the time
  const spells: NPC['spells'] = [];
  if (Math.random() < 0.60) { // 60% chance to have spells
    // Determine the NPC's primary spellcasting ability (INT, WIS, or CHA)
    const spellcastingStatModifiers = [statModifiers.INT, statModifiers.WIS, statModifiers.CHA];
    // Randomly pick one of the three modifiers to be the primary spellcasting modifier
    const primarySpellcastingStatModifier = getRandomElement(spellcastingStatModifiers);

    const numSpells = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3 spells
    const shuffledSpells = [...SPELLS].sort(() => 0.5 - Math.random()); // Shuffle for random selection
    for (let i = 0; i < numSpells && i < shuffledSpells.length; i++) {
      const spell = shuffledSpells[i];
      // All spells for this NPC will use the same primary spellcasting stat modifier
      spells.push({
        spell,
        attackBonus: calculateAttackBonus(level, primarySpellcastingStatModifier),
        damage: calculateDamage(spell.damageDie, primarySpellcastingStatModifier, 0, level),
      });
    }
  }

  // 7. Goals, Traits, Flaws
  const goal = getRandomElement(GOALS);
  const characterTrait = getRandomElement(TRAITS);
  const flaw = getRandomElement(FLAWS);

  // 8. Loot Drops
  const numLootItems = Math.floor(Math.random() * 3) + 1; // 1 to 3 random items
  const selectedLootItems = Array.from({ length: numLootItems }, () => getRandomElement(LOOT_ITEMS));
  const gold = rollDice(`1d10`) * level; // 1d10 x level gold

  return {
    name,
    level,
    region: selectedRegion.name,
    profession,
    species: chosenSpecies.name,
    physicalTraits, // Now an object
    stats,
    statModifiers,
    weapons,
    numAttacks,
    spells,
    goal,
    characterTrait,
    flaw,
    loot: {
      items: selectedLootItems,
      gold,
    },
  };
}
