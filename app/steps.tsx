import { StyleSheet, Image, Platform, TouchableOpacity, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { Linking } from 'react-native';  // Import Linking API from React Native

export default function NotificationScreen() {

  const navigation = useNavigation(); // Get navigation object from React Navigation

  const handleNavigate = () => {
    navigation.navigate('Begrafenisondernemers'); // Navigate to 'Screen' when button is pressed
  };

  const handleCall = () => {
    Linking.openURL('tel:112'); // Replace 112 with the desired emergency number
  };

  const handleBank = () => {
    navigation.navigate('Banken'); // Navigate to 'Screen' when button is pressed
  };
  // State to manage checkbox status
  const [checked, setChecked] = useState(Array(10).fill(false));

  const toggleCheckbox = (index) => {
    setChecked(prevState => {
      const newChecked = [...prevState];
      newChecked[index] = !newChecked[index];
      return newChecked;
    });
  };

  const getButtonStyle = (index) => {
    return checked[index] ? [styles.checkButton, styles.buttonChecked] : styles.button;
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
      <View style={styles.flexComplete}>
      <TouchableOpacity onPress={handleCall} style={getButtonStyle(0)}>
          <Text style={styles.buttonText}>contacteer de hulpdiensten</Text>
        </TouchableOpacity>
        <CheckBox
          title=""
          checked={checked[0]}
          onPress={() => toggleCheckbox(0)}
          checkedColor="#8AAD34" // Customize the checkbox color here
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
        />
      </View>

      <Collapsible title="2. Formaliteiten in het kader van orgaandonatie en de schenking van een lichaam aan de wetenschap">
    
        <ThemedText>
          De beslissing om het lichaam aan de wetenschap te schenken, is een heel persoonlijke beslissing die ieder voor zichzelf moet nemen. Je partner moet bij leven uitdrukkelijk zijn toestemming hiertoe hebben
          gegeven. Weet je zeker dat je partner hiervoor zijn toestemming heeft gegeven? Dan moet je zo snel mogelijk telefonisch contact opnemen met de bevoegde universitaire dienst (binnen de 48u).
          De begrafenisondernemer zal zorgen voor het vervoer van het lichaam.
        </ThemedText>
      </Collapsible>
      <View style={styles.flexComplete}>
      <TouchableOpacity onPress={handleNavigate} style={getButtonStyle(1)}>
          <Text style={styles.buttonText}>laad toestemming op</Text>
        </TouchableOpacity>
        <CheckBox
          title=""
          checked={checked[1]}
          onPress={() => toggleCheckbox(1)}
          checkedColor="#8AAD34" // Customize the checkbox color here
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
        />
      </View>

      <Collapsible title="3. Contacteer een begrafenisondernemer.">
        <ThemedText>
          Een begrafenisondernemer neemt veel van de administratieve formaliteiten op zich. Hij zorgt dat de uitvaart op de meest serene manier voor jou verloopt. Je kiest zelf wie je als begrafenisondernemer aanstelt. De begrafeniskosten worden meestal geregeld door deze te verrekenen met de tegoeden van de nalatenschap.
        </ThemedText>
      </Collapsible>
      <View style={styles.flexComplete}>
      <TouchableOpacity onPress={handleNavigate} style={getButtonStyle(2)}>
          <Text style={styles.buttonText}>zoek begrafenisondernemer</Text>
        </TouchableOpacity>
        <CheckBox
          title=""
          checked={checked[2]}
          onPress={() => toggleCheckbox(2)}
          checkedColor="#8AAD34" // Customize the checkbox color here
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
        />
      </View>

      <Collapsible title="4. Geef het overlijden aan bij de ambtenaar van de burgerlijke stand.">
        <ThemedText>
          Het overlijden moet aangegeven worden bij de burgerlijke stand van de gemeente waar je partner gestorven is en de gemeente waar de partner begraven of gecremeerd zal worden. In de praktijk zal de begrafenisondernemer deze formaliteiten op zich nemen.
        </ThemedText>
      </Collapsible>
      <View style={styles.flexComplete}>
      <TouchableOpacity onPress={handleNavigate} style={getButtonStyle(3)}>
          <Text style={styles.buttonText}>contacteer mijn gemeente</Text>
        </TouchableOpacity>
        <CheckBox
          title=""
          checked={checked[3]}
          onPress={() => toggleCheckbox(3)}
          checkedColor="#8AAD34" // Customize the checkbox color here
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
        />
      </View>

      <ThemedText type="subtitle">In de eerste dagen... </ThemedText>

      <Collapsible title="1. Neem contact op met de bank.">
        <ThemedText>
         Erfgenamen moeten alle bankinstellingen waar de overledene klant was, informeren. Vanaf het moment dat de bank op de hoogte is van het overlijden, blokkeren ze de rekeningen en verzegelen ze de kluis tot er meer duidelijkheid is over de identiteit van de erfgenamen. De deblokkering van de rekeningen gebeurt via een attest van erfopvolging (registratiekantoor) of een akte van erfopvolging (notaris).
        </ThemedText>
      </Collapsible>
      <View style={styles.flexComplete}>
      <TouchableOpacity onPress={handleBank} style={getButtonStyle(4)}>
          <Text style={styles.buttonText}>contacteer mijn bank</Text>
        </TouchableOpacity>
        <CheckBox
          title=""
          checked={checked[4]}
          onPress={() => toggleCheckbox(4)}
          checkedColor="#8AAD34" // Customize the checkbox color here
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
        />
      </View>

      <Collapsible title="2. Licht een aantal instanties in.">
        <ThemedText>
          De mensen en instanties waarmee je partner contractueel gebonden was, moeten op de hoogte worden gesteld. Dit kan de werkgever, de boekhouder, de verzekeraars, het ziekenfonds, het OCMW, de vakbond, het D.I.V. (dienst voor Inschrijving van Voertuigen),... zijn. Zij moeten op de hoogte worden gebracht. 
        </ThemedText>
      </Collapsible>
      <View style={styles.flexComplete}>
        <TouchableOpacity onPress={handleNavigate} style={getButtonStyle(5)}>
            <Text style={styles.buttonText}>zoek belangrijke instanties</Text>
          </TouchableOpacity>
          <CheckBox
            title=""
            checked={checked[5]}
            onPress={() => toggleCheckbox(5)}
            checkedColor="#8AAD34" // Customize the checkbox color here
            containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
          />
      </View>    


      <ThemedText type="subtitle">In de eerste maanden... </ThemedText>

      <Collapsible title="1. Vraag je overlevingspensieon aan.">
        <ThemedText>
          Als huwelijks- partner heb je onder bepaalde voorwaarden recht op een overlevingspensioen.
        </ThemedText>
      </Collapsible>
      <View style={styles.flexComplete}>
          <TouchableOpacity onPress={handleNavigate} style={getButtonStyle(6)}>
              <Text style={styles.buttonText}>contacteer mijn instantie</Text>
          </TouchableOpacity>
              <CheckBox
                title=""
                checked={checked[6]}
                onPress={() => toggleCheckbox(6)}
                checkedColor="#8AAD34" // Customize the checkbox color here
              containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
              />
      </View>

      <Collapsible title="2. Denk na over het lot van de gezinswoning.">
        <ThemedText>
          Was je samen met je partner huurder? Dan loopt de overeenkomst gewoon door. Was je samen met je partner eigenaar van de woning? Dan hangt het lot van de gezinswoning nauw samen met je erfrechten als partner. De notaris zal je hierover meer vertellen.
        </ThemedText>
      </Collapsible>
      <View style={styles.flexComplete}>
        <TouchableOpacity onPress={handleNavigate} style={getButtonStyle(7)}>
          <Text style={styles.buttonText}>contacteer mijn notaris</Text>
        </TouchableOpacity>
        <CheckBox
          title=""
          checked={checked[7]}
          onPress={() => toggleCheckbox(7)}
          checkedColor="#8AAD34" // Customize the checkbox color here
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
        />
      </View>
      
      <Collapsible title="3. Vergeet de aagnifte van nalatenschap niet.">
        <ThemedText>
          Wacht niet te lang om een notaris aan te spreken. Enerzijds om de rekeningen te deblokkeren, maar ook omdat de aangifte van nalatenschap binnen een termijn van vier maanden opgesteld moet worden.
          Het is van belang om deze termijn te respecteren om boetes te vermijden. Wees gerust, de notaris zal je bij iedere stap bijstaan en adviseren.
        </ThemedText>
      </Collapsible>
      <View style={styles.flexComplete}>
        <TouchableOpacity onPress={handleNavigate} style={getButtonStyle(8)}>
          <Text style={styles.buttonText}>contacteer mijn notaris</Text>
        </TouchableOpacity>
        <CheckBox
          title=""
          checked={checked[8]}
          onPress={() => toggleCheckbox(8)} style={{flex: 4}}
          checkedColor="#8AAD34" // Customize the checkbox color here
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
        />
      </View>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
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

  checkButton:{
    borderColor: '#8AAD34',
    borderWidth: 2,
    paddingVertical: 0,
    marginHorizontal: 0,
  },

  buttonChecked: {
    backgroundColor: '#D3D3D3', // Gray color when checked
    borderColor: '#A9A9A9', // Darker gray border

    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 2,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#8AAD34',
    fontSize: 14,
    marginHorizontal: 30,
    paddingVertical: 4,
  },

  flexComplete:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },

  header: {
    marginTop: 0,
  },
});
