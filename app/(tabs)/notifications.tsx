import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, ScrollView, View, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotificationScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#CDD5DC', dark: '#353636' }}
      headerImage={<Image
        source={require('@/assets/images/LogoQuercus.png')}
        style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Notifications</ThemedText>
      </ThemedView>
      
    <ScrollView style={styles.wrapperContainer}>
      
    
      <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={require('@/assets/images/react-logo.png')}
      />
        <Text style={styles.title}>Notif 1</Text>
        <Text style={styles.body}> Notif tekst</Text>
      </View>

      <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={require('@/assets/images/react-logo.png')}
      />
        <Text style={styles.title}>Notif 1</Text>
        <Text style={styles.body}> Notif tekst</Text>
      </View>

      <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={require('@/assets/images/react-logo.png')}
      />
        <Text style={styles.title}>Notif 1</Text>
        <Text style={styles.body}>  Notif tekst</Text>
      </View>

      <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={require('@/assets/images/react-logo.png')}
      />
        <Text style={styles.title}>Notif 1</Text>
        <Text style={styles.body}>  Notif tekst</Text>
      </View>

      <View style={styles.wrapper}>
      <Image
        style={styles.image}
        source={require('@/assets/images/react-logo.png')}
      />
        <Text style={styles.title}>Notif 1</Text>
        <Text style={styles.body}>  Notif tekst</Text>
      </View>

    </ScrollView >
      
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#555',
  },


});
