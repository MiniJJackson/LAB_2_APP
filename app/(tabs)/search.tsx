import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    // Mock search results for demonstration
    const mockResults = [
      { id: '1', title: 'Result 1', description: 'This is the description for result 1.' },
      { id: '2', title: 'Result 2', description: 'This is the description for result 2.' },
      { id: '3', title: 'Result 3', description: 'This is the description for result 3.' },
    ];

    setResults(mockResults);
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons size={100} name="search" style={styles.headerIcon} />
        <Text style={styles.title}>Search</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.noResultsText}>No results found</Text>}
      />
    </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginTop: 10,
  },
  headerIcon: {
    color: '#8AAD34',
  },
  title: {
    fontSize: 24,
    marginTop: 16,
  },
  searchContainer: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 4,
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
  card: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 16,
    color: 'gray',
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
});

