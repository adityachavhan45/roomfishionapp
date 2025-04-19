import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button, Image, Alert, Platform, TouchableOpacity
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function BookingScreen({ route, navigation }) {
  const { room } = route.params;
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showCheckInPicker, setShowCheckInPicker] = useState(false);
  const [showCheckOutPicker, setShowCheckOutPicker] = useState(false);

  const handleConfirm = () => {
    if (!name || !mobile || !checkInDate || !checkOutDate) {
      Alert.alert('Please fill in all fields');
      return;
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      Alert.alert('Invalid Mobile Number', 'Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    if (checkInDate > checkOutDate) {
      Alert.alert('Date Error', 'Check-out date must be after check-in date.');
      return;
    }

    Alert.alert(
      '✅ Booking Confirmed!',
      `Room: ${room.name}\nName: ${name}\nMobile: ${mobile}\nCheck-in: ${checkInDate.toDateString()}\nCheck-out: ${checkOutDate.toDateString()}`
    );

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: room.image }} style={styles.image} />
      <Text style={styles.title}>Booking: {room.name}</Text>
      <Text style={styles.price}>{room.price}</Text>

      <TextInput
        placeholder="Enter Your Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Enter Mobile Number"
        style={styles.input}
        value={mobile}
        onChangeText={setMobile}
        keyboardType="numeric"
        maxLength={10}
      />

      <TouchableOpacity onPress={() => setShowCheckInPicker(true)} style={styles.input}>
        <Text style={{ color: checkInDate ? '#000' : '#999' }}>
          {checkInDate ? `Check-in: ${checkInDate.toDateString()}` : 'Select Check-in Date'}
        </Text>
      </TouchableOpacity>
      {showCheckInPicker && (
        <DateTimePicker
          value={checkInDate || new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowCheckInPicker(false);
            if (selectedDate) setCheckInDate(selectedDate);
          }}
        />
      )}

      <TouchableOpacity onPress={() => setShowCheckOutPicker(true)} style={styles.input}>
        <Text style={{ color: checkOutDate ? '#000' : '#999' }}>
          {checkOutDate ? `Check-out: ${checkOutDate.toDateString()}` : 'Select Check-out Date'}
        </Text>
      </TouchableOpacity>
      {showCheckOutPicker && (
        <DateTimePicker
          value={checkOutDate || new Date()}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowCheckOutPicker(false);
            if (selectedDate) setCheckOutDate(selectedDate);
          }}
        />
      )}

      <Button title="Confirm Booking" onPress={handleConfirm} color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    justifyContent: 'center',
  },
});
