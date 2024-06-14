import React from 'react';
import { Image, StyleSheet, Platform, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import necessary navigation modules


import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';



export default function HomeScreen() {

  const navigation = useNavigation(); // Get navigation object from React Navigation

  const handleNavigate = () => {
    navigation.navigate('steps'); // Navigate to 'SearchScreen' when button is pressed
  };
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#CDD5DC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/LogoQuercus.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
          <ThemedText>
          When readt LOVE on to the next step.
          </ThemedText>
        </ThemedText>
        <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
        <ThemedText>
          When readt move on to the next step.
        </ThemedText>
        <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">More info</ThemedText>
        <ThemedText>
          When ready move on to the next step.
          </ThemedText>
          <ThemedText>
          When ready move on to the next step.
          </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 70,
    width: 160,
    bottom: 0,
    left: 0,
    marginTop: 8,
    marginBottom: 16,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#8AAD34',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
