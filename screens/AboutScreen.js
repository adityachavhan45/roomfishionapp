import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const teamMembers = [
  {
    name: 'Aditya Chavhan',
    role: 'Full-Stack Developer',
    image: { uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg' },
  },
  {
    name: 'Shubham Barhate',
    role: 'UI/UX Designer',
    image: { uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
  },
  {
    name: 'Krishna Nilkhante',
    role: 'Frontend-Develer',
    image: { uri: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg' },
  },
];

export default function AboutScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>About RoomFusion</Text>
        <Text style={styles.heroText}>
          Where Luxury Meets Comfort
        </Text>
      </View>

      {/* Mission Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          At RoomFusion, we are dedicated to providing exceptional hospitality experiences that exceed our guests' expectations. Our commitment to excellence, attention to detail, and personalized service ensure that every stay is memorable.
        </Text>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg' }}
          style={styles.sectionImage}
          resizeMode="cover"
        />
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10+</Text>
          <Text style={styles.statLabel}>Years of Excellence</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>1000+</Text>
          <Text style={styles.statLabel}>Happy Guests</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>150</Text>
          <Text style={styles.statLabel}>Luxury Rooms</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>50+</Text>
          <Text style={styles.statLabel}>Team Members</Text>
        </View>
      </View>

      {/* Values Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Values</Text>
        <View style={styles.valuesContainer}>
          <View style={styles.valueBox}>
            <Text style={styles.valueIcon}>💫</Text>
            <Text style={styles.valueTitle}>Excellence</Text>
            <Text style={styles.valueText}>
              We strive for excellence in every aspect of our service.
            </Text>
          </View>
          <View style={styles.valueBox}>
            <Text style={styles.valueIcon}>🤝</Text>
            <Text style={styles.valueTitle}>Integrity</Text>
            <Text style={styles.valueText}>
              We conduct our business with the highest ethical standards.
            </Text>
          </View>
          <View style={styles.valueBox}>
            <Text style={styles.valueIcon}>🚀</Text>
            <Text style={styles.valueTitle}>Innovation</Text>
            <Text style={styles.valueText}>
              Continuously evolving to serve our guests better.
            </Text>
          </View>
        </View>
      </View>

      {/* Team Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meet the Team</Text>
        <View style={styles.teamContainer}>
          {teamMembers.map((member, index) => (
            <View key={index} style={styles.teamCard}>
              <Image source={member.image} style={styles.teamImage} />
              <Text style={styles.teamName}>{member.name}</Text>
              <Text style={styles.teamRole}>{member.role}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Call to Action */}
      <View style={styles.ctaContainer}>
        <Text style={styles.ctaTitle}>Ready to find your perfect room?</Text>
        <Text style={styles.ctaText}>
          Explore our available rooms and start your seamless booking experience with RoomFusion.
        </Text>
        <TouchableOpacity style={styles.ctaButton} onPress={() => navigation.navigate('RoomBooking')}>
          <Text style={styles.ctaButtonText}>View Our Rooms</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Keep your current styles here without changes unless you want to enhance layout or colors.


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  hero: {
    backgroundColor: '#4C51BF',
    padding: 30,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  heroText: {
    fontSize: 16,
    color: '#E2E8F0',
    textAlign: 'center',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#2D3748',
  },
  sectionText: {
    fontSize: 16,
    color: '#4A5568',
    textAlign: 'center',
    marginBottom: 10,
  },
  sectionImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginTop: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#EDF2F7',
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2B6CB0',
  },
  statLabel: {
    fontSize: 14,
    color: '#4A5568',
  },
  valuesContainer: {
    flexDirection: 'column',
    gap: 20,
    marginTop: 10,
  },
  valueBox: {
    backgroundColor: '#F7FAFC',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
  },
  valueIcon: {
    fontSize: 28,
    marginBottom: 5,
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C5282',
  },
  valueText: {
    textAlign: 'center',
    color: '#4A5568',
    marginTop: 5,
  },
  teamContainer: {
    flexDirection: 'column',
    gap: 20,
    marginTop: 10,
  },
  teamCard: {
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
    padding: 15,
    borderRadius: 12,
    elevation: 1,
  },
  teamImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  teamName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2C5282',
  },
  teamRole: {
    color: '#4A5568',
  },
  ctaContainer: {
    padding: 30,
    backgroundColor: '#2B6CB0',
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  ctaText: {
    fontSize: 16,
    color: '#E2E8F0',
    textAlign: 'center',
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  ctaButtonText: {
    color: '#2B6CB0',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
