import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const roomsData = [
  {
    id: '1',
    name: 'Standard Room',
    price: '₹999 / night',
    image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comfortable room with basic amenities.',
  },
  {
    id: '2',
    name: 'Deluxe Room',
    price: '₹1499 / night',
    image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Spacious room with premium features.',
  },
  {
    id: '3',
    name: 'Luxury Room',
    price: '₹1999 / night',
    image: 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Luxurious experience with top-class service.',
  },
  {
    id: '4',
    name: 'Suite Room',
    price: '₹2499 / night',
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Spacious suite with extra comfort.',
  },
  {
    id: '5',
    name: 'Executive Room',
    price: '₹1799 / night',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Designed for business travelers with style.',
  },
];


export default function RoomsScreen() {
  const navigation = useNavigation();

  const handleBook = (room) => {
    navigation.navigate('Booking', { room });
  };

  return (
    <View style={styles.container}>
      <Header title="Available Rooms" />
      <ScrollView contentContainerStyle={styles.content}>
        {roomsData.map((room) => (
          <View key={room.id} style={styles.card}>
            <Image source={{ uri: room.image }} style={styles.image} />
            <Text style={styles.roomName}>{room.name}</Text>
            <Text style={styles.price}>{room.price}</Text>
            <Text style={styles.description}>{room.description}</Text>
            <TouchableOpacity style={styles.bookButton} onPress={() => handleBook(room)}>
              <Text style={styles.bookText}>Book</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  roomName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: '#4CAF50',
    marginVertical: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  bookButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
