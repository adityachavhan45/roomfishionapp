import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';
import Header from '../components/Header';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProfileScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const API_BASE = 'http://192.168.81.148:5000/api/auth'; // Replace with your IP

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Please fill all fields');
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setUser({ name: data.name, email: data.email });
        setIsLoggedIn(true);
        Alert.alert('Login successful!');
      } else {
        Alert.alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('An error occurred while logging in');
    }
  };

  const handleRegister = async () => {
    if (!form.name || !form.email || !form.password) {
      Alert.alert('Please fill all fields');
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        Alert.alert('Registration successful! You can now login.');
        setIsRegister(false);
        setForm({ name: '', email: '', password: '' });
      } else {
        Alert.alert(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('An error occurred while registering');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setForm({ name: '', email: '', password: '' });
    setUser({ name: '', email: '' });
  };

  return (
    <LinearGradient colors={['#e0eafc', '#cfdef3']} style={styles.container}>
      <Header title="Welcome to RoomFishion" />

      <View style={styles.content}>
        {!isLoggedIn ? (
          <>
            <Text style={styles.title}>{isRegister ? 'Register' : 'Login'}</Text>
            {isRegister && (
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={form.name}
                onChangeText={(text) => setForm({ ...form, name: text })}
              />
            )}
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={form.password}
              onChangeText={(text) => setForm({ ...form, password: text })}
              secureTextEntry
            />

            <Pressable
              style={({ pressed }) => [
                isRegister ? [styles.button, styles.registerButton] : styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={isRegister ? handleRegister : handleLogin}
            >
              <Text style={styles.buttonText}>
                {isRegister ? 'Register' : 'Login'}
              </Text>
            </Pressable>

            <TouchableOpacity onPress={() => setIsRegister(!isRegister)} activeOpacity={0.7}>
              <Text style={styles.switchText}>
                {isRegister
                  ? 'Already have an account? Login'
                  : "Don't have an account? Register"}
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.title}>Welcome, {user.name || 'Guest'}!</Text>
            <Text style={styles.info}>Email: {user.email}</Text>

            <Pressable
              style={({ pressed }) => [
                styles.logoutButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleLogout}
            >
              <Text style={styles.buttonText}>Logout</Text>
            </Pressable>
          </>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  input: {
    width: '80%',
    padding: 14,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  button: {
    backgroundColor: '#3478f6',
    paddingVertical: 15,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 4,
  },
  registerButton: {
    backgroundColor: '#34c759',
  },
  logoutButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 15,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
    elevation: 4,
  },
  buttonPressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  switchText: {
    color: '#3478f6',
    marginTop: 15,
    fontSize: 16,
  },
  info: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
  },
});
