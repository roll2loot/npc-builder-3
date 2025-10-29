// app/settings.tsx
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from '../components/Button';
import { saveFavorites } from '../lib/storage'; // Import saveFavorites

const SettingsScreen: React.FC = () => {

  const handleClearFavorites = async () => {
    Alert.alert(
      "Clear Favorites",
      "Are you sure you want to delete ALL your saved NPCs from favorites?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Clear All",
          onPress: async () => {
            try {
              await saveFavorites([]); // Save an empty array to clear all favorites
              Alert.alert("Favorites Cleared", "All your saved NPCs have been removed.");
            } catch (error) {
              console.error("Error clearing favorites:", error);
              Alert.alert("Error", "Could not clear favorites. Please try again.");
            }
          },
          style: "destructive"
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Settings</Text>

        {/* Clear Favorites Option */}
        <View style={styles.optionRow}>
          <Text style={styles.optionLabel}>Clear All Favorite NPCs</Text>
          <Button
            title="Clear Favorites"
            onPress={handleClearFavorites}
            color="#dc3545" // Red for destructive action
            textColor="#fff"
          />
        </View>

        {/* Placeholder for future features */}
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            More settings and features, including ad-free purchase options,
            will be added here in future updates!
          </Text>
          <Text style={styles.infoText}>
            NPC Builder 4.5 - Version 1.0.0
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  optionRow: {
    flexDirection: 'column', // Changed to column for better button layout
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionLabel: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10, // Added margin for spacing
    textAlign: 'center',
  },
  infoSection: {
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 5,
  },
});

export default SettingsScreen;
