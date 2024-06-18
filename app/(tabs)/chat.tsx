import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, View, Button } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ChatScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/LogoQuercus.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Chat with us</ThemedText>
      </ThemedView>
      <ThemedText>
        Welcome to our chat. Choose if you just need AI assistance or you want to get in touch with our team.
      </ThemedText>
      <View style={styles.optionContainer}>
        <View style={styles.option}>
          <Image
            source={require('@/assets/images/react-logo.png')}
            style={styles.optionImage}
          />
          <ThemedText style={styles.optionText}>Get AI Assistance</ThemedText>
          <Button
            title="Start AI Chat"
            onPress={() => console.log('AI Assistance pressed')}
            color="#007BFF"
          />
        </View>
        <View style={styles.option}>
          <Image
            source={require('@/assets/images/react-logo.png')}
            style={styles.optionImage}
          />
          <ThemedText style={styles.optionText}>Contact Our Team</ThemedText>
          <Button
            title="Contact Team"
            onPress={() => console.log('Contact Team pressed')}
            color="#8AAD34"
          />
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
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
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  option: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    width: '45%',
  },
  optionImage: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
