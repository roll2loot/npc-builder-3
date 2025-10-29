// components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: string; // Base color for gradient start
  endColor?: string; // End color for gradient
  textColor?: string;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  color = '#6200EE', // Default deep purple (start)
  endColor = '#8a2be2', // Default violet (end)
  textColor = '#fff',
  disabled = false,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, disabled && styles.buttonDisabled]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || loading}
    >
      <LinearGradient
        colors={[color, endColor]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        {loading ? (
          <ActivityIndicator color={textColor} />
        ) : (
          <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 10, // Slightly more rounded
    minWidth: 160, // Ensure a minimum width
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // More pronounced shadow
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 8, // For Android shadow
    marginVertical: 10,
    overflow: 'hidden', // Clip gradient at rounded corners
  },
  gradient: {
    paddingVertical: 14, // Increased padding
    paddingHorizontal: 25, // Increased padding
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Make gradient fill container
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.5, // Slightly spaced out letters
  },
  buttonDisabled: {
    opacity: 0.6, // Dim disabled buttons
    // We don't change background here because gradient is inside
    // If you want a different disabled color, you'd need to conditionally render LinearGradient or pass different colors
  },
});

export default Button;
