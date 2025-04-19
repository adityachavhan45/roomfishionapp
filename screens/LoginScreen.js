import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      alert('All fields are required. Please enter your email and password.');
      return;
    }
  
    console.log('Logging in:', { email, password });
    navigation.replace('MainTabs'); 
  };

  const goToRegister = () => {
    navigation.replace('Register'); 
  };

  const goToHome = () => {
    navigation.replace('MainTabs'); 
  };

  return (
    <View style={styles.container}>
      <Header title="Login" />
      <View style={styles.form}>
        <Text style={styles.pageTitle}>Welcome to RoomFishion!</Text>
        <Text style={styles.subtitle}>Please log in to continue</Text>

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToRegister}>
          <Text style={styles.registerLink}>
            Not registered? <Text style={styles.registerText}>Go to Register</Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/* 👇 Go to Home button at bottom */}
      <View style={styles.guestContainer}>
        <TouchableOpacity style={styles.guestButton} onPress={goToHome}>
          <Text style={styles.guestButtonText}>Go to Home</Text>
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
  registerLink: {
    marginTop: 20,
    textAlign: 'center',
    color: '#333',
  },
  registerText: {
    color: '#3478f6',
    fontWeight: 'bold',
  },
  guestContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  guestButton: {
    backgroundColor: '#6c757d',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  guestButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
