import React, { useState, useRef } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Animated,Dimensions,TouchableWithoutFeedback,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Header = ({ title }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(width)).current;

  const toggleMenu = () => {
    if (!menuVisible) {
      setMenuVisible(true);
      Animated.timing(slideAnim, {
        toValue: width - 200, // Adjust width of the drawer here
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: width,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setMenuVisible(false));
    }
  };

  return (
    <View style={{ zIndex: 10 }}>
      {/* Header Bar */}
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
      </View>

      {/* Slide-in Menu */}
      {menuVisible && (
        <>
          {/* Close menu when tapping outside */}
          <TouchableWithoutFeedback onPress={toggleMenu}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>

          <Animated.View style={[styles.dropdown, { right: slideAnim }]}>
            <Text style={styles.menuItem}>Home</Text>
            <Text style={styles.menuItem}>Profile</Text>
            <Text style={styles.menuItem}>Help</Text>
            <Text style={styles.menuItem}>Settings</Text>
            <Text style={styles.menuItem}>Logout</Text>
          </Animated.View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#525559',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  overlay: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 5,
  },
  dropdown: {
    position: 'absolute',
    top: 60,
    width: 200,
    height: '100%',
    backgroundColor: '#eee',
    padding: 10,
    zIndex: 6,
  },
  menuItem: {
    paddingVertical: 10,
    fontSize: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default Header;
