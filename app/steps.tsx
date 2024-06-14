
import { StyleSheet, Image, Platform, TouchableOpacity, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotificationScreen() {

  const navigation = useNavigation(); // Get navigation object from React Navigation

  const handleNavigate = () => {
    navigation.navigate(' '); // Navigate to 'Screen' when button is pressed
  };

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
        <ThemedText type="title">We helpen je verder.</ThemedText>
      </ThemedView>
      <ThemedText type="subtitle">In de eerste uren... </ThemedText>

      <Collapsible title="1. Laat het overlijden vaststellen door een arts.">
        <ThemedText>
          Sterft je partner in het ziekenhuis, dan gebeurt dit automatisch. Sterft je partner thuis, dan moet je een arts laten komen die het overlijden zal vaststellen. De arts zal een overlijdensattest opmaken.
        </ThemedText>
      </Collapsible>

      <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>contacteer de hulpdiensten</Text>
      </TouchableOpacity>

      <Collapsible title="2. Formaliteiten in het kader van orgaandonatie en de schenking van een lichaam aan de wetenschap">
        <ThemedText>
          De beslissing om het lichaam aan de wetenschap te schenken, is een heel persoonlijke beslissing die ieder voor zichzelf moet nemen. Je partner moet bij leven uitdrukkelijk zijn toestemming hiertoe hebben
          gegeven. Weet je zeker dat je partner hiervoor zijn toestemming heeft gegeven? Dan moet je zo snel mogelijk telefonisch contact opnemen met de bevoegde universitaire dienst (binnen de 48u).
          De begrafenisondernemer zal zorgen voor het vervoer van het lichaam.
        </ThemedText>
      </Collapsible>

      <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>laad bestand op</Text>
      </TouchableOpacity>

      <Collapsible title="3. Contacteer een begrafenisondernemer.">
        <ThemedText>
          Een begrafenisondernemer neemt veel van de administratieve formaliteiten op zich. Hij zorgt dat de uitvaart op de meest serene manier voor jou verloopt. Je kiest zelf wie je als begrafenisondernemer aanstelt. De begrafeniskosten worden meestal geregeld door deze te verrekenen met de tegoeden van de nalatenschap.
        </ThemedText>
      </Collapsible>

      <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>zoek een begrafenisondernemer</Text>
      </TouchableOpacity>


      <Collapsible title="4. Geef het overlijden aan bij de ambtenaar van de burgerlijke stand.">
        <ThemedText>
          Het overlijden moet aangegeven worden bij de burgerlijke stand van de gemeente waar je partner gestorven is en de gemeente waar de partner begraven of gecremeerd zal worden. In de praktijk zal de begrafenisondernemer deze formaliteiten op zich nemen.
        </ThemedText>
      </Collapsible>

      <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>contacteer mijn gemeente</Text>
      </TouchableOpacity>


      <ThemedText type="subtitle">In de eerste dagen... </ThemedText>

      <Collapsible title="1. Neem contact op met de bank.">
        <ThemedText>
         Erfgenamen moeten alle bankinstellingen waar de overledene klant was, informeren. Vanaf het moment dat de bank op de hoogte is van het overlijden, blokkeren ze de rekeningen en verzegelen ze de kluis tot er meer duidelijkheid is over de identiteit van de erfgenamen. De deblokkering van de rekeningen gebeurt via een attest van erfopvolging (registratiekantoor) of een akte van erfopvolging (notaris).
        </ThemedText>
      </Collapsible>

      <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>contacteer mijn bank</Text>
      </TouchableOpacity>

      <Collapsible title="2. Licht een aantal instanties in.">
        <ThemedText>
          De mensen en instanties waarmee je partner contractueel gebonden was, moeten op de hoogte worden gesteld. Dit kan de werkgever, de boekhouder, de verzekeraars, het ziekenfonds, het OCMW, de vakbond, het D.I.V. (dienst voor Inschrijving van Voertuigen),... zijn. Zij moeten op de hoogte worden gebracht. 
        </ThemedText>
      </Collapsible>

      <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>zoek instanties</Text>
      </TouchableOpacity>

      <ThemedText type="subtitle">In de eerste maanden... </ThemedText>

      <Collapsible title="1. Vraag je overlevingspensieon aan.">
        <ThemedText>
          Als huwelijks- partner heb je onder bepaalde voorwaarden recht op een overlevingspensioen.
        </ThemedText>
      </Collapsible>

      <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>contacteer instantie</Text>
      </TouchableOpacity>

      <Collapsible title="2. Denk na over het lot van de gezinswoning.">
        <ThemedText>
          Was je samen met je partner huurder? Dan loopt de overeenkomst gewoon door. Was je samen met je partner eigenaar van de woning? Dan hangt het lot van de gezinswoning nauw samen met je erfrechten als partner. De notaris zal je hierover meer vertellen.
        </ThemedText>
      </Collapsible>

      <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>contacteer mijn notaris</Text>
      </TouchableOpacity>

      <Collapsible title="3. Vergeet de aagnifte van nalatenschap niet.">
        <ThemedText>
          Wacht niet te lang om een notaris aan te spreken. Enerzijds om de rekeningen te deblokkeren, maar ook omdat de aangifte van nalatenschap binnen een termijn van vier maanden opgesteld moet worden.
          Het is van belang om deze termijn te respecteren om boetes te vermijden. Wees gerust, de notaris zal je bij iedere stap bijstaan en adviseren.

        </ThemedText>
      </Collapsible>

      <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>Begrafenisondernemer</Text>
      </TouchableOpacity>

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
  button: {
    backgroundColor: '#FFF',
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    borderColor: '#8AAD34',
    borderWidth: 2,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#8AAD34',
    fontSize: 14,
  },
  header:{
    marginTop: 0,
  },
});
