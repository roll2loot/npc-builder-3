import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Standard React Native picker

interface DropdownProps {
  label: string;
  selectedValue: string | number;
  onValueChange: (itemValue: string | number, itemIndex: number) => void;
  items: { label: string; value: string | number }[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, selectedValue, onValueChange, items }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={styles.picker}
          itemStyle={styles.pickerItem} // only affects iOS
        >
          {items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  pickerContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    //overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    minHeight: Platform.OS === 'ios' ? 200 : 50, // enough space for scrolling
  },
  picker: {
  height: Platform.OS === 'ios' ? 200 : 50, // bigger height for iOS wheel
  width: '100%',
  color: '#333',
  fontSize: 18,
},
pickerItem: {
  fontSize: Platform.OS === 'ios' ? 22 : 16, // noticeably bigger on iOS
},
 // picker: {
   // height: 50,
 //   width: '100%',
 //   color: '#333',
 //   fontSize: 18, // base font size
 // },
 // pickerItem: {
 //   fontSize: Platform.OS === 'ios' ? 20 : 16, // bump size for iOS wheel
 // },
});

export default Dropdown;
