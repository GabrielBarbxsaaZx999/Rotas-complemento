import * as React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            source={{ uri: 'https://preview.redd.it/kanye-west-graduation-3840x2160-v0-kjektcn4myv91.png?auto=webp&s=09ab551caf64aa606dc8720953ad6abaca36c079' }}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', resizeMode: 'cover' }}
        >
            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 20, borderRadius: 10 }}>
                <Text style={{ fontSize: 40, fontFamily: 'Arial', fontWeight: 'bold', color: '#333' }}>
                    Amigo estou aqui
                </Text>
                <Button
                    title="Gustavo"
                    onPress={() => navigation.navigate('Gustavo')}
                    color="black"  // Cor roxa
                    fontWeight="bold"
                />
                <Button
                    title="Vitin"
                    onPress={() => navigation.navigate('Vitin')}
                    color="purple"  // Cor azul
                    fontWeight="bold"
                />
            </View>
        </ImageBackground>
    );
}

function GustavoScreen({ navigation }) {
    return (
        <ImageBackground
            source={{ uri: 'https://preview.redd.it/kanye-west-graduation-3840x2160-v0-kjektcn4myv91.png?auto=webp&s=09ab551caf64aa606dc8720953ad6abaca36c079' }}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', resizeMode: 'cover' }}
        >
            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 20, borderRadius: 10, marginBottom: 20 }}>
                <Text style={{ fontSize: 35, fontFamily: 'Arial', fontWeight: 'bold', color: '#333' }}>
                    Gustavo tem que imitar o coringa e rir loucamente por ser CLT e pobre!
                    <br>
                </br>
                   Coloquei o Gustavo porque ele ja chupou laranja comigo
                </Text>
                
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
        </ImageBackground>
    );
}

function VitinScreen({ navigation }) {
    return (
        <ImageBackground
            source={{ uri: 'https://preview.redd.it/kanye-west-graduation-3840x2160-v0-kjektcn4myv91.png?auto=webp&s=09ab551caf64aa606dc8720953ad6abaca36c079' }}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', resizeMode: 'cover' }}
        >
            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 20, borderRadius: 10, marginBottom: 20 }}>
                <Text style={{ fontSize: 35, fontFamily: 'Arial', fontWeight: 'bold', color: '#333' }}>
                    Vitin tem que imitar um Pitbull latindo raivoso!
                    <br>
                    </br>
                    <Text>Coloquei o Vitin por que ele ja chupou jabuticaba comigo</Text>
                </Text>
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
        </ImageBackground>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Gustavo" component={GustavoScreen} />
                <Stack.Screen name="Vitin" component={VitinScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
