import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';


export default function HomeScreen() {

  return (
    <ScrollView>
        <View style={styles.container}>
        <Image source={require('@/assets/images/LogoQuercus.png')}/>
        <Text style={styles.title}>Selecteer je bank.</Text>

            <View style={styles.wrapper}>
              <Image
                style={styles.image}
                source={require('@/assets/images/kbc.jpeg')}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>KBC</Text>
                <Text style={styles.body}>
                We zijn een geïntegreerde bank-verzekeraar die focust op retail- en privatebankingklanten, kmo's en midcaps.
                </Text>
              </View>
            </View>

            <View style={styles.wrapper}>
              <Image
                style={styles.image}
                source={require('@/assets/images/fortis.jpeg')}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>BNP Paribas Fortis</Text>
                <Text style={styles.body}>
                Onze missie bleef dezelfde: bijdragen aan economische groei en maatschappelijk welzijn in ons land.
                </Text>
              </View>
            </View>

            <View style={styles.wrapper}>
              <Image
                style={styles.image}
                source={require('@/assets/images/belfius.jpeg')}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>Belfius</Text>
                <Text style={styles.body}>
                Beheer uw verrichtingen en rekeningen op uw computer of met onze apps voor smartphone en tablet.
                </Text>
              </View>
            </View>

            <View style={styles.wrapper}>
              <Image
                style={styles.image}
                source={require('@/assets/images/ing.jpeg')}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>ING</Text>
                <Text style={styles.body}>
                Betalingen, kredieten, sparen, beleggingen, verzekeringen, pensioen: ING stelt je oplossingen voor en zorgt voor een begeleiding op maat..
                </Text>
              </View>
            </View>

            <View style={styles.wrapper}>
              <Image
                style={styles.image}
                source={require('@/assets/images/argenta.jpeg')}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>Argenta</Text>
                <Text style={styles.body}>
                Met de Argenta-app regel je jouw dagelijkse bankzaken snel en eenvoudig. Waar en wanneer het voor jou past.
                </Text>
              </View>
            </View>
         
            <View style={styles.wrapper}>
              <Image
                style={styles.image}
                source={require('@/assets/images/crelan.jpeg')}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>Crelan</Text>
                <Text style={styles.body}>
                Crelan is een coöperatieve bank waar u als klant voelt dat er een persoonlijk contact is.
                </Text>
              </View>
            </View>

            <View style={styles.wrapper}>
              <Image
                style={styles.image}
                source={require('@/assets/images/bpost.jpeg')}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>BPost Bank</Text>
                <Text style={styles.body}>
                Belgische bank. bpost bank. Logo. Oprichting, 1995. Eigenaar, BNP Paribas Fortis. Land, Vlag van België België 
                </Text>
              </View>
            </View>
        </View>
        </ScrollView>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    resizeMode: 'cover',
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
