// CharacterList.js

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2B2B',
    padding: 16,
  },
  characterContainer: {
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  characterImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  characterName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      setCharacters(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching characters:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);


  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : (
        <>
          {characters.map((character) => (
            <View key={character.id} style={styles.characterContainer}>
              <Image source={{ uri: character.image }} style={styles.characterImage} />
              <Text style={styles.characterName}>{character.name}</Text>
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
};

export default CharacterList;
