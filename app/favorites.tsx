/*// app/favorites.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import NPCCard from '../components/NPCCard';
import { NPC } from '../lib/generateNPC';
import { loadFavorites, saveFavorites } from '../lib/storage';
import { showInterstitialAd } from '../lib/monetization';
import Button from '../components/Button'; // Re-using the Button component

interface FavoritesScreenProps {
  isAdFree: boolean;
}

const FavoritesScreen: React.FC<FavoritesScreenProps> = ({ isAdFree }) => {
  const [favorites, setFavorites] = useState<NPC[]>([]);
  const [selectedNPC, setSelectedNPC] = useState<NPC | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Load favorites and show ad when the screen is focused
  useFocusEffect(
    useCallback(() => {
      const loadData = async () => {
        const storedFavorites = await loadFavorites();
        setFavorites(storedFavorites);

        if (!isAdFree) {
          console.log("Showing interstitial ad in Favorites tab...");
          await showInterstitialAd();
        }
      };

      loadData();

      // Clean up function if needed
      return () => {
        setSelectedNPC(null); // Clear selected NPC when leaving the screen
        setShowDetailModal(false);
      };
    }, [isAdFree])
  );

  /**
   * Handles deleting an NPC from favorites.
   * @param npcToDelete The NPC object to delete.
   */
  /*const handleDeleteNPC = async (npcToDelete: NPC) => {
    Alert.alert(
      "Delete NPC",
      `Are you sure you want to delete ${npcToDelete.name} from your favorites?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: async () => {
            const updatedFavorites = favorites.filter(
              (fav) => !(fav.name === npcToDelete.name && fav.level === npcToDelete.level && fav.species === npcToDelete.species)
            );
            await saveFavorites(updatedFavorites);
            setFavorites(updatedFavorites);
            setSelectedNPC(null); // Close modal if the deleted NPC was open
            setShowDetailModal(false);
            Alert.alert("Deleted", `${npcToDelete.name} removed from favorites.`);
          },
          style: "destructive"
        }
      ]
    );
  };

  const renderItem = ({ item }: { item: NPC }) => (
    <TouchableOpacity
      style={styles.favoriteItem}
      onPress={() => {
        setSelectedNPC(item);
        setShowDetailModal(true);
      }}
    >
      <Text style={styles.favoriteName}>{item.name}</Text>
      <Text style={styles.favoriteDetails}>{item.species}, Level {item.level}, {item.profession}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favorite NPCs yet!</Text>
          <Text style={styles.emptyText}>Generate and save NPCs from the Home tab.</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.name}-${item.level}-${index}`}
          contentContainerStyle={styles.listContent}
        />
      )}

     // {/* Modal for displaying full NPC details */ //}
     // {showDetailModal && selectedNPC && (
    //    <View style={styles.modalOverlay}>
    //      <View style={styles.modalContent}>
    //        <NPCCard npc={selectedNPC} />
    //        <View style={styles.modalButtons}>
    //          <Button title="Close" onPress={() => setShowDetailModal(false)} color="#6c757d" />
    //          <Button title="Delete" onPress={() => handleDeleteNPC(selectedNPC)} color="#dc3545" />
    //        </View>
   //       </View>
   //     </View>
   //   )}
  //  </View>
 // );
//};

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  favoriteItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  favoriteName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  favoriteDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '95%', // Adjust width as needed
    height: '90%', // Adjust height as needed
    maxHeight: '90%',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 10,
  }
});

export default FavoritesScreen;*/
// app/favorites.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import NPCCard from '../components/NPCCard';
import { NPC } from '../lib/generateNPC';
import { loadFavorites, saveFavorites } from '../lib/storage';
//import { showInterstitialAd } from '../lib/monetization';
import Button from '../components/Button';

// Removed: interface FavoritesScreenProps { isAdFree: boolean; }
interface FavoritesScreenProps {} // Empty interface for now

const FavoritesScreen: React.FC<FavoritesScreenProps> = ({} /* Removed isAdFree prop */) => {
  const [favorites, setFavorites] = useState<NPC[]>([]);
  const [selectedNPC, setSelectedNPC] = useState<NPC | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  // Load favorites and show ad when the screen is focused
  useFocusEffect(
    useCallback(() => {
      const loadData = async () => {
        const storedFavorites = await loadFavorites();
        setFavorites(storedFavorites);
//ADDS HAVE BEEN REMOVED FOR THE SAKE OF MY SANITY. FUCK UM
      /*  // Always show ad, as ad-free status is not being tracked via IAP anymore
        console.log("Showing interstitial ad in Favorites tab...");
        await showInterstitialAd(); */
      };

      loadData();

      // Clean up function if needed
      return () => {
        setSelectedNPC(null);
        setShowDetailModal(false);
      };
    }, []) // isAdFree removed from dependencies
  );

  /**
   * Handles deleting an NPC from favorites.
   * @param npcToDelete The NPC object to delete.
   */
  const handleDeleteNPC = async (npcToDelete: NPC) => {
    Alert.alert(
      "Delete NPC",
      `Are you sure you want to delete ${npcToDelete.name} from your favorites?`,
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: async () => {
            const updatedFavorites = favorites.filter(
              (fav) => !(fav.name === npcToDelete.name && fav.level === npcToDelete.level && fav.species === npcToDelete.species)
            );
            await saveFavorites(updatedFavorites);
            setFavorites(updatedFavorites);
            setSelectedNPC(null);
            setShowDetailModal(false);
            Alert.alert("Deleted", `${npcToDelete.name} removed from favorites.`);
          },
          style: "destructive"
        }
      ]
    );
  };

  const renderItem = ({ item }: { item: NPC }) => (
    <TouchableOpacity
      style={styles.favoriteItem}
      onPress={() => {
        setSelectedNPC(item);
        setShowDetailModal(true);
      }}
    >
      <Text style={styles.favoriteName}>{item.name}</Text>
      <Text style={styles.favoriteDetails}>{item.species}, Level {item.level}, {item.profession}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favorite NPCs yet!</Text>
          <Text style={styles.emptyText}>Generate and save NPCs from the Home tab.</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.name}-${item.level}-${index}`}
          contentContainerStyle={styles.listContent}
        />
      )}

      {/* Modal for displaying full NPC details */}
      {showDetailModal && selectedNPC && (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <NPCCard npc={selectedNPC} />
            <View style={styles.modalButtons}>
              <Button title="Close" onPress={() => setShowDetailModal(false)} color="#6c757d" />
              <Button title="Delete" onPress={() => handleDeleteNPC(selectedNPC)} color="#dc3545" />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  favoriteItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  favoriteName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  favoriteDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '95%',
    height: '90%',
    maxHeight: '90%',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 10,
  }
});

export default FavoritesScreen;
