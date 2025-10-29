// components/NPCCard.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NPC } from '../lib/generateNPC';

interface NPCCardProps {
  npc: NPC;
}

const NPCCard: React.FC<NPCCardProps> = ({ npc }) => {
  if (!npc) {
    return (
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>No NPC generated yet.</Text>
        <Text style={styles.text}>Press "Generate NPC" to create one!</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.card}>
        {/* Name and Level */}
        <View style={styles.headerSection}>
          <Text style={styles.nameText}>{npc.name}</Text>
          <Text style={styles.levelText}>Level {npc.level}</Text>
        </View>

        {/* Basic Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic Information</Text>
          <Text style={styles.text}><Text style={styles.label}>Species:</Text> {npc.species}</Text>
          <Text style={styles.text}><Text style={styles.label}>Region:</Text> {npc.region}</Text>
          <Text style={styles.text}><Text style={styles.label}>Profession:</Text> {npc.profession}</Text>
        </View>

        {/* Physical Traits */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Physical Traits</Text>
          <Text style={styles.text}><Text style={styles.label}>Build:</Text> {npc.physicalTraits.build}</Text>
          <Text style={styles.text}><Text style={styles.label}>Eyes:</Text> {npc.physicalTraits.eyes}</Text>
          <Text style={styles.text}><Text style={styles.label}>Hair:</Text> {npc.physicalTraits.hair}</Text>
          {npc.physicalTraits.notableFeatures.length > 0 && (
            <View>
              <Text style={styles.text}><Text style={styles.label}>Notable Features:</Text></Text>
              {npc.physicalTraits.notableFeatures.map((feature, index) => (
                <Text key={index} style={styles.text}>- {feature}</Text>
              ))}
            </View>
          )}
        </View>

        {/* Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Stats</Text>
          {Object.entries(npc.stats).map(([statName, statValue]) => (
            <Text key={statName} style={styles.text}>
              <Text style={styles.label}>{statName}:</Text> {statValue} (Modifier: {npc.statModifiers[statName as keyof typeof npc.statModifiers] >= 0 ? '+' : ''}{npc.statModifiers[statName as keyof typeof npc.statModifiers]})
            </Text>
          ))}
        </View>

        {/* Weapons */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Weapons</Text>
          <Text style={styles.text}><Text style={styles.label}>Number of Attacks:</Text> {npc.numAttacks}</Text>
          {npc.weapons.length > 0 ? (
            npc.weapons.map((weaponInfo, index) => (
              <Text key={index} style={styles.text}>
                - {weaponInfo.weapon.name}: {weaponInfo.attackBonus >= 0 ? '+' : ''}{weaponInfo.attackBonus} to hit, {weaponInfo.damage} damage
              </Text>
            ))
          ) : (
            <Text style={styles.text}>No weapons assigned.</Text>
          )}
        </View>

        {/* Spells */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Spells</Text>
          {npc.spells.length > 0 ? (
            npc.spells.map((spellInfo, index) => (
              <Text key={index} style={styles.text}>
                - {spellInfo.spell.name}: {spellInfo.attackBonus >= 0 ? '+' : ''}{spellInfo.attackBonus} to hit, {spellInfo.damage} damage
              </Text>
            ))
          ) : (
            <Text style={styles.text}>No spells assigned.</Text>
          )}
        </View>

        {/* Goals, Traits, Flaws */}
   {/*}     <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personality</Text>
          <Text style={styles.text}><Text style={styles.label}>Goal:</Text> {npc.goal}</Text>
          <Text style={styles.text}><Text style={styles.label}>Trait:</Text> {npc.characterTrait}</Text>
          <Text style={styles.text}><Text style={styles.label}>Flaw:</Text> {npc.flaw}</Text>
        </View>
{/* THIS IS NEW STUFF ADDED*/}
           <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personality</Text>
          {/* Goal */}
          <View style={styles.detailRow}>
            <Text style={styles.label}>Goal:</Text>
            <Text style={styles.textValue}>{npc.goal}</Text>
          </View>
          {/* Trait */}
          <View style={styles.detailRow}>
            <Text style={styles.label}>Trait:</Text>
            <Text style={styles.textValue}>{npc.characterTrait}</Text>
          </View>
          {/* Flaw */}
          <View style={styles.detailRow}>
            <Text style={styles.label}>Flaw:</Text>
            <Text style={styles.textValue}>{npc.flaw}</Text>
          </View>
        </View>

        {/* Loot Drops */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Loot</Text>
          <Text style={styles.text}><Text style={styles.label}>Gold:</Text> {npc.loot.gold} gp</Text>
          <Text style={styles.text}><Text style={styles.label}>Items:</Text></Text>
          {npc.loot.items.length > 0 ? (
            npc.loot.items.map((item, index) => (
              <Text key={index} style={styles.text}>- {item}</Text>
            ))
          ) : (
            <Text style={styles.text}>None</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#e0e0e0', 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12, 
    padding: 20,
    marginVertical: 15, 
    marginHorizontal: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 6, 
    elevation: 6, 
  },
  headerSection: {
    marginBottom: 18, 
    borderBottomWidth: 1.5, 
    borderBottomColor: '#dcdcdc', 
    paddingBottom: 12,
  },
  nameText: {
    fontSize: 30, 
    fontWeight: 'bold',
    color: '#2c3e50', 
    textAlign: 'center',
    marginBottom: 5,
  },
  levelText: {
    fontSize: 20, 
    color: '#7f8c8d', 
    textAlign: 'center',
  },
  section: {
    marginBottom: 18, 
    backgroundColor: '#fefefe', 
    borderRadius: 10,
    padding: 18, 
    borderLeftColor: '#6200EE', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 19, 
    fontWeight: 'bold',
    marginBottom: 10, 
    color: '#34495e', 
    borderBottomWidth: 1, 
    borderBottomColor: '#f0f0f0',
    paddingBottom: 5,
  },

 
  detailRow: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    marginBottom: 5, 
    alignItems: 'flex-start', 
  },
  label: {
    fontWeight: 'bold',
    color: '#4a69bd',
    marginRight: 5, 
  },
  textValue: { 
    flex: 1, 
    fontSize: 16,
    lineHeight: 25,
    color: '#34495e',
  },

  text: { 
    fontSize: 16,
    lineHeight: 25, 
    color: '#34495e', 
  },
});

 /* label: {
    fontWeight: 'bold',
    color: '#4a69bd', // A subtle blue for labels
  },
  text: {
    fontSize: 16,
    lineHeight: 25, // Increased line height for readability
    color: '#34495e', // Darker text for readability
  },
});*/

export default NPCCard;
