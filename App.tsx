// App.tsx
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View, Text, StyleSheet } from 'react-native'; // Keep these imports for other uses, though not directly used by App.tsx's Tab.Screen children anymore

// Import screens
import HomeScreen from './app/index';
import FavoritesScreen from './app/favorites';
import SettingsScreen from './app/settings'; // This must be imported if used as a component prop

// Import monetization setup
//import { initializeMonetization } from './lib/monetization';

// Define Tab Navigator
const Tab = createBottomTabNavigator();

// Prevent native splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      try {
        setFontsLoaded(true); // Assuming font loading is successful or not critical for app readiness
        //await initializeMonetization();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsAppReady(true);
        await SplashScreen.hideAsync();
      }
    }
    prepareApp();
  }, []);

  if (!isAppReady) {
    return null; // Don't render anything until app is ready and splash screen is hidden
  }

  return (
    <NavigationContainer>
      {/* EVERYTHING INSIDE THIS NAVIGATOR MUST BE A TAB.SCREEN OR TAB.GROUP */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Favorites') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else {
                iconName = 'help-circle-outline'; // Fallback icon
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6200EE', // Deep purple
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#6200EE', // Deep purple header
          },
          headerTintColor: '#fff', // White text for header
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'NPC Builder' }}
        />
        <Tab.Screen
          name="Favorites"
          children={() => <FavoritesScreen />} // Still using children prop here, which is fine for simple component rendering
          options={{ title: 'Favorites' }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen} // THIS MUST BE THE CORRECT IMPORT AND USE OF COMPONENT PROP
          options={{ title: 'Settings' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// These styles are not strictly needed if SettingsScreen is a separate component,
// but keeping them here doesn't harm anything.
const styles = StyleSheet.create({
  settingsPlaceholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  settingsPlaceholderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  settingsPlaceholderSubText: {
    fontSize: 16,
    color: '#666',
  },
});
