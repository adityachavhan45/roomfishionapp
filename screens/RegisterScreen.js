import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // 👈 for navigation

  // const handleRegister = () => {
  //   if (!name.trim() || !email.trim() || !password.trim()) {
  //     alert('All fields are required. Please fill in all the details.');
  //     return;
  //   }
  //   console.log('Registering:', { name, email, password });
  //   // Add your register logic here (API call, validation, etc.)
  // };

  //to funtion to sending the data backend which is node js server
  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert('All fields are required. Please fill in all the details.');
      return;
    }
  
    try {
      const response = await fetch('http://10.0.2.2:5000/api/auth/register', { // Use 10.0.2.2 for Android Emulator
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Registration Success:', data);
        alert('Registration successful!');
        // Navigate to login or home screen
      } else {
        alert(data.message || 'Registration failed.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };
  


  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Header title="Register" />
      <View style={styles.form}>
        <Text style={styles.pageTitle}>Create a RoomFishion Account</Text>
        <Text style={styles.subtitle}>Please fill the details to register</Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          required
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
          
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          required
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          required
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToLogin}>
          <Text style={styles.loginLink}>
            Already have an account? <Text style={styles.loginText}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  form: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3478f6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  loginLink: {
    marginTop: 20,
    textAlign: 'center',
    color: '#333',
  },
  loginText: {
    color: '#3478f6',
    fontWeight: 'bold',
  },
});
