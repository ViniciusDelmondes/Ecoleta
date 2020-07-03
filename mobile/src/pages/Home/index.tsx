import React, {useState} from 'react';
import {Feather as Icon} from '@expo/vector-icons'
import {View, ImageBackground, Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, Platform} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

// Anotations
// As fontes no stylesheet deverá ser importadas do expo-google-fonts
// O ImageBackground serve para substituir uma view para adicionar uma imagem de fundo.
// O recurso ImageStyle serve apenas para trabalhar com a imagem importada no ImageBackground

// O KeyboardAvoidingView serve para que o teclado não sobreponha o conteúdo

//Autocapitalize serve para deixar os caracteres que o usuário digitar em caixa alta

//Maxlenght serve para obrigar quantidade de caracteres inseridos pelo usuário

// O autoCorrect serve para que o app não corrija quando o usuário digitar

const Home = () => {

// Ativando navegação no app:

    const navigation = useNavigation();

// Armazenando as informações colocadas nos inputs de UF e cidade

    const [uf, setUf] = useState('');
    const [cidade, setCidade] = useState('');

    function handleNavigateToPoints() {
      navigation.navigate('Points', {
        uf,
        cidade
      })
    }

    return (
      <KeyboardAvoidingView style={{ flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ImageBackground 
            source={require('../../assets/home-background.png')} 
            style={styles.container}
            imageStyle={{width: 274, height: 368}}>

            <View style={styles.main}>
                <Image source={require('../../assets/logo.png')} />
                <Text style={styles.title}> Seu marketplace de coleta de resíduos </Text>
                <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
            </View>

            <View style={styles.footer}>
                <TextInput
                  style={styles.input}
                  placeholder="Digite a UF"
                  value={uf}
                  maxLength={2}
                  autoCapitalize="characters"
                  autoCorrect={false}
                  onChangeText={setUf}
                />

                  <TextInput
                    style={styles.input}
                    placeholder="Digite a Cidade"
                    value={cidade}
                    autoCorrect={false}
                  onChangeText={setCidade}
                />
                    
    

                <RectButton style={styles.button} onPress={handleNavigateToPoints}>
                  <View style={styles.buttonIcon}>
                      <Text> 
                        <Icon name="arrow-right" color="#fff" size={24} />
                      </Text>
                  </View>
                  <Text style={styles.buttonText}>
                      Entrar
                  </Text>
                </RectButton>
            </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 40,
    },
  
    main: {
      flex: 1,
      justifyContent: "center",
    },
  
    title: {
      color: "#7a33cc",
      fontSize: 32,
      fontFamily: "Ubuntu_700Bold",
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: "#6C6C80",
      fontSize: 16,
      marginTop: 16,
      fontFamily: "Roboto_400Regular",
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: "#FFF",
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: "#34CB79",
      height: 60,
      flexDirection: "row",
      borderRadius: 10,
      overflow: "hidden",
      alignItems: "center",
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      justifyContent: "center",
      alignItems: "center",
    },
  
    buttonText: {
      flex: 1,
      justifyContent: "center",
      textAlign: "center",
      color: "#FFF",
      fontFamily: "Roboto_500Medium",
      fontSize: 16,
    },
  });

export default Home;