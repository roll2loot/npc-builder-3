/*// lib/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NPC } from './generateNPC'; // Import NPC type for strong typing

const FAVORITES_KEY = 'npcBuilderFavorites';
const AD_FREE_STATUS_KEY = 'npcBuilderAdFreeStatus';

/**
 * Loads favorite NPCs from AsyncStorage.
 * @returns A promise that resolves to an array of NPC objects.
 */
/*export const loadFavorites = async (): Promise<NPC[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Failed to load favorites:", e);
    return [];
  }
};

/**
 * Saves favorite NPCs to AsyncStorage.
 * @param favorites The array of NPC objects to save.
 * @returns A promise that resolves when the data is saved.
 */
/*export const saveFavorites = async (favorites: NPC[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(favorites);
    await AsyncStorage.setItem(FAVORITES_KEY, jsonValue);
  } catch (e) {
    console.error("Failed to save favorites:", e);
  }
};

/**
 * Loads the ad-free status from AsyncStorage.
 * @returns A promise that resolves to a boolean indicating ad-free status.
 */
/*export const loadAdFreeStatus = async (): Promise<boolean> => {
  try {
    const jsonValue = await AsyncStorage.getItem(AD_FREE_STATUS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : false;
  } catch (e) {
    console.error("Failed to load ad-free status:", e);
    return false;
  }
};

/**
 * Saves the ad-free status to AsyncStorage.
 * @param status The boolean status to save.
 * @returns A promise that resolves when the data is saved.
 */
/*export const saveAdFreeStatus = async (status: boolean): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(status);
    await AsyncStorage.setItem(AD_FREE_STATUS_KEY, jsonValue);
  } catch (e) {
    console.error("Failed to save ad-free status:", e);
  }
};*/
// lib/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NPC } from './generateNPC'; // Import NPC type for strong typing

const FAVORITES_KEY = 'npcBuilderFavorites';
// Removed: const AD_FREE_STATUS_KEY = 'npcBuilderAdFreeStatus';

/**
 * Loads favorite NPCs from AsyncStorage.
 * @returns A promise that resolves to an array of NPC objects.
 */
export const loadFavorites = async (): Promise<NPC[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(FAVORITES_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Failed to load favorites:", e);
    return [];
  }
};

/**
 * Saves favorite NPCs to AsyncStorage.
 * @param favorites The array of NPC objects to save.
 * @returns A promise that resolves when the data is saved.
 */
export const saveFavorites = async (favorites: NPC[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(favorites);
    await AsyncStorage.setItem(FAVORITES_KEY, jsonValue);
  } catch (e) {
    console.error("Failed to save favorites:", e);
  }
};

// Removed: loadAdFreeStatus and saveAdFreeStatus functions
// export const loadAdFreeStatus = async (): Promise<boolean> => { ... };
// export const saveAdFreeStatus = async (status: boolean): Promise<void> => { ... };
