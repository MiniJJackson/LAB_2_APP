import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
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
        <ThemedText type="subtitle">Dit is je profiel pagina.</ThemedText>
        <ThemedText>
          Start men in te loggen via Itsme.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Deel en laad documenten op.</ThemedText>
        <ThemedText>
          Binnenkort kan je documenten opladen en delen met de belangrijke instanties.
        </ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Stel naasten aan.</ThemedText>
        <ThemedText>
          Binnenkort kan je naasten aanstellen die je kunnen helpen met de administratie.
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
});
