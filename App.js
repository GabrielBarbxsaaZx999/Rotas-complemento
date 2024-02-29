import * as React from 'react';
import { Button, View, Text, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://preview.redd.it/kanye-west-graduation-3840x2160-v0-kjektcn4myv91.png?auto=webp&s=09ab551caf64aa606dc8720953ad6abaca36c079' }}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', resizeMode: 'cover' }}
    >
      <View style={{ backgroundColor:   '#fff', padding: 20, borderRadius: 10 }}>
        <Text style={{ fontSize: 40, fontFamily: 'Arial', fontWeight: 'bold', color: '#333', color:'black' }}>
          5 Lugares favoritos do SENAI-Sumaré
        </Text>
        <Button
          title="Jardim da parte de trás"
          onPress={() => navigation.navigate('Jardim')}
        />
        <Button
          title="Biblioteca"
          onPress={() => navigation.navigate('Biblioteca')}
        />

        <Button
          title="Biblioteca 2.0"
          onPress={() => navigation.navigate('Biblioteca 2.0')}
        />

        <Button
          title="Mesas do al mosso"
          onPress={() => navigation.navigate('Almosso')}
        />

        <Button
          title="Saída florida"
          onPress={() => navigation.navigate('Saida')}
        />

      </View>
    </ImageBackground>
  );
}

function JardimScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

<Text style={{ fontSize: 25, fontFamily: 'Arial', fontWeight: 'bold', color: '#333' }}>
                   Escolhemos essa parte porque é legal e bonita!
                  </Text>
                  
      <Image
       source={require('./jardim.jpeg')}
        style={{ width: 800, height:600  }}
      />


    </View>
  );
}

function BiblioScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25, fontFamily: 'Arial', fontWeight: 'bold', color: '#333' }}>
                  A biblioteca tem muitas atividades legais e a interação social lá é intensa
                  </Text>
      <Image
          source={require('./biblio.jpeg')}
          style={{ width: 800, height:600  }}
      />
    </View>
  );
}

function Bib2Screen() {
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25, fontFamily: 'Arial', fontWeight: 'bold', color: '#333' }}>
                   A biblioteca merece duas fotos porque é muito bacana
                  </Text>
      <Image
        source={require('./bib2.jpeg')}
        style={{ width: 800, height:600  }}
      />
    </View>
  );
}

function AlmossoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25, fontFamily: 'Arial', fontWeight: 'bold', color: '#333' }}>
                  Almoçar nessa parte é supimpa porque podemos refletir comer e desfrutar da nossa bela vida
                  </Text>
      <Image
        source={require('./almosso.jpeg')}
        style={{ width: 800, height:600  }}
      />
    </View>
  );
}

function SaidaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 25, fontFamily: 'Arial', fontWeight: 'bold', color: '#333' }}>
                 Essa parte da saida é bonita e nos traz o pensamentos de uma das melhores partes do SENAI
                  </Text>
      <Image
        source={require('./saida.jpeg')}
        style={{ width: 800, height:600  }}
      />
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Jardim" component={JardimScreen} />
        <Stack.Screen name="Biblioteca" component={BiblioScreen} />
        <Stack.Screen name="Biblioteca 2.0" component={Bib2Screen} />
        <Stack.Screen name="Almosso" component={AlmossoScreen} />
        <Stack.Screen name="Saida" component={SaidaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
