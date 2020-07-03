import React from 'react';
import { AppLoading } from 'expo'
import { StatusBar } from 'react-native';
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';


import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }
 
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
      <Routes />
    </>
  );
}

// O StatusBar serve para modificar/estilizar a barra de status do celular.
// No caso, nossa aplicação irá colocar a cor já estilizada, ao invés da cor padrão

// O Apploading serve para emitir um sinal de carregamento
