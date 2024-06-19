import React from 'react';
import { Image, StyleSheet, Platform, TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import necessary navigation modules

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {

  const navigation = useNavigation(); // Get navigation object from React Navigation

  const handleNavigate = () => {
    navigation.navigate('Steps'); // Navigate to 'Screen' when button is pressed
  };
  
  const handleFuneral = () => {
    navigation.navigate('Begrafenisondernemers'); // Navigate to 'Screen' when button is pressed
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
        <ThemedText type="title">Hoe kunnen wij u begeleiden?</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Heeft u het overlijden al aangegeven bij de gemeente? </ThemedText>
        <ThemedText>Dit kunt u hier doen.</ThemedText>
        <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>Start u aangifte</Text>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Heeft u de begrafenisondernemer al gecontacteerd?</ThemedText>
        <ThemedText>Heb je hulp nodig bij het zoeken van een begrafenisondernemer en het regelen van de begrafenis?</ThemedText>
        <ThemedText>Start hier met je zoektocht en begeleiding.</ThemedText>
        <TouchableOpacity onPress={handleFuneral} style={styles.button}>
          <Text style={styles.buttonText}>Begrafenisondernemer</Text>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">More info</ThemedText>
        <ScrollView style={styles.wrapperContainer}>
          {Array.from({ length: 5 }).map((_, index) => (
            <View style={styles.wrapper} key={index}>
              <Image
                style={styles.image}
                source={require('@/assets/images/react-logo.png')}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>News {index + 1}</Text>
                <Text style={styles.body}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit in leo et mollis. Quisque vehicula a nisl nec vehicula.
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
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
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginHorizontal: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  wrapperContainer: {
    flex: 1,
    padding: 10,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#555',
  },
});
