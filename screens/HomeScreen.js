import React, { useRef } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Header from '../components/Header';

export default function HomeScreen() {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <ScrollView contentContainerStyle={styles.content}>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
          }}
          style={styles.hero}
          imageStyle={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        >
          <Text style={styles.heroTitle}>Welcome to RoomFishion</Text>
          <Text style={styles.heroSubtitle}>
            Experience unparalleled comfort and elegance
          </Text>
        </ImageBackground>

        <Text style={styles.sectionTitle}>Our Services</Text>
        <View style={styles.cardContainer}>
          {[
            { icon: '🏊‍♂️', text: 'Infinity Pool' },
            { icon: '🍽️', text: 'Fine Dining' },
            { icon: '💆‍♀️', text: 'Luxury Spa' },
            { icon: '🏋️‍♂️', text: 'Fitness Center' },
          ].map((item, index) => (
            <Animated.View
              key={index}
              style={styles.animatedCard}
            >
              <TouchableOpacity activeOpacity={0.8} style={styles.serviceCard}>
                <Text style={styles.serviceIcon}>{item.icon}</Text>
                <Text style={styles.serviceText}>{item.text}</Text>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>

        {/* Why Choose RoomFishion */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose RoomFishion?</Text>
          {[
            { icon: '🛎️', text: '24/7 Customer Support' },
            { icon: '💰', text: 'Affordable Luxury' },
            { icon: '📍', text: 'Prime Location' },
          ].map((item, index) => (
            <View key={index} style={styles.featureCard}>
              <Text style={styles.featureIcon}>{item.icon}</Text>
              <Text style={styles.featureText}>{item.text}</Text>
            </View>
          ))}
        </View>

        {/* Testimonials */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What Our Guests Say</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              { quote: '“Absolutely stunning experience!”', name: 'Sarah W.' },
              { quote: '“Rooms were clean and comfy.”', name: 'Akash K.' },
              { quote: '“Best hotel app I\'ve used!”', name: 'Priya M.' },
            ].map((item, index) => (
              <TouchableOpacity key={index} activeOpacity={0.8}>
                <View style={styles.testimonialCard}>
                  <Text style={styles.quote}>{item.quote}</Text>
                  <Text style={styles.reviewer}>- {item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* CTA Section */}
        <Animated.View
          style={[styles.ctaBox, { transform: [{ scale: scaleAnim }] }]}
        >
          <Text style={styles.ctaText}>Ready to book your next stay?</Text>
          <TouchableOpacity
            style={styles.ctaButton}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Text style={styles.ctaButtonText}>Explore Rooms</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { paddingBottom: 30 },
  hero: {
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroTitle: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  heroSubtitle: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 20,
    color: '#2b6cb0',
  },
  section: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  animatedCard: {
    width: '45%',
    marginVertical: 8,
  },
  serviceCard: {
    backgroundColor: '#edf2f7',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  serviceIcon: { fontSize: 28, marginBottom: 8 },
  serviceText: { fontSize: 15, color: '#333' },

  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#e2e8f0',
    padding: 10,
    borderRadius: 10,
  },
  featureIcon: { fontSize: 22, marginRight: 10 },
  featureText: { fontSize: 16 },

  testimonialCard: {
    width: 260,
    padding: 15,
    marginHorizontal: 10,
    backgroundColor: '#fff5f5',
    borderRadius: 12,
    elevation: 3,
  },
  quote: {
    fontStyle: 'italic',
    fontSize: 15,
    color: '#4a5568',
    marginBottom: 10,
  },
  reviewer: {
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#2d3748',
  },

  ctaBox: {
    backgroundColor: '#3182ce',
    margin: 20,
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5,
  },
  ctaText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
  ctaButton: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#3182ce',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
