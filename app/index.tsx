// app/index.tsx
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import NPCCard from '../components/NPCCard';
import { NPC, generateNPC } from '../lib/generateNPC';
import { REGIONS } from '../constants/regions';
import { loadFavorites, saveFavorites } from '../lib/storage'; // Import storage functions

const levels = Array.from({ length: 20 }, (_, i) => ({ label: (i + 1).toString(), value: i + 1 }));
const regions = REGIONS.map(r => ({ label: r.name, value: r.name }));

const HomeScreen: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [selectedRegion, setSelectedRegion] = useState<string>(REGIONS[0].name);
  const [currentNPC, setCurrentNPC] = useState<NPC | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  /**
   * Handles the generation of a new NPC.
   */
  const handleGenerateNPC = () => {
    setIsGenerating(true);
    try {
      const newNPC = generateNPC(selectedLevel, selectedRegion);
      setCurrentNPC(newNPC);
    } catch (error) {
      console.error("Error generating NPC:", error);
      Alert.alert("Generation Error", "Could not generate NPC. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  /**
   * Handles saving the current NPC to favorites.
   */
  const handleSaveToFavorites = async () => {
    if (!currentNPC) {
      Alert.alert("No NPC to Save", "Generate an NPC first before saving to favorites.");
      return;
    }

    setIsSaving(true);
    try {
      const existingFavorites = await loadFavorites();
      // Check if NPC already exists in favorites to prevent duplicates based on name and level
      const isDuplicate = existingFavorites.some(
        fav => fav.name === currentNPC.name && fav.level === currentNPC.level && fav.species === currentNPC.species
      );

      if (isDuplicate) {
        Alert.alert("Already Saved", "This NPC is already in your favorites!");
        return;
      }

      const updatedFavorites = [...existingFavorites, currentNPC];
      await saveFavorites(updatedFavorites);
      Alert.alert("Success", `${currentNPC.name} saved to favorites!`);
    } catch (error) {
      console.error("Error saving NPC to favorites:", error);
      Alert.alert("Save Error", "Could not save NPC to favorites. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <View style={styles.container}>
       <ScrollView contentContainerStyle={styles.scrollContentContainer}>
      <View style={styles.controlsContainer}>
        <Dropdown
          label="Level"
          selectedValue={selectedLevel}
          onValueChange={(itemValue) => setSelectedLevel(itemValue as number)}
          items={levels}
        />
        <Dropdown
          label="Region"
          selectedValue={selectedRegion}
          onValueChange={(itemValue) => setSelectedRegion(itemValue as string)}
          items={regions}
        />
        <Button
          title="Generate NPC"
          onPress={handleGenerateNPC}
          loading={isGenerating}
          disabled={isGenerating}
        />
        <Button
          title="Save to Favorites"
          onPress={handleSaveToFavorites}
          color="#28a745" // Green color for save button
          loading={isSaving}
          disabled={isSaving || !currentNPC}
        />
      </View>
       {currentNPC && <NPCCard npc={currentNPC} />}
       </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 10,
  },
  scrollContentContainer: {
    paddingTop: 10, // Apply top padding here
    paddingBottom: 20, // Add some padding at the bottom for better scrolling
    alignItems: 'center', // Center items horizontally within the scroll view
  },
  controlsContainer: {
    width: '90%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
});

export default HomeScreen;
