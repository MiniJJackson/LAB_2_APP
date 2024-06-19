import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SearchFuneralDirectorScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const backgroundImage = require('../assets/images/mechelenMap.png');


  const handleSearch = () => {
    // Replace with your actual API call
    fetch(`https://api.example.com/funeral-directors?query=${searchQuery}`)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDetails}>{item.address}</Text>
      <Text style={styles.itemDetails}>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/LogoQuercus.png')}/>
      <TextInput
        style={styles.input}
        placeholder="Zoek een begrafenisondernemer..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={results}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        style={styles.resultsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    resizeMode: 'cover',
  },
  backgroundImage:{
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#8AAD34',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resultsList: {
    marginTop: 16,
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDetails: {
    fontSize: 14,
    color: '#666',
  },
});
