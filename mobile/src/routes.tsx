import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// Notations
// Navegação stack utilizamos para aplicações no qual o usuário irá navegar e depois irá retornar para
// telas anteriores

// O NavigationContainer no front seria igual ao browser Route

// O AppStack.Screen é para cada tela da aplicação

// Usando o ScreenOptions e o cardStyle conseguimos definir alguns estilos padrões para todas as telas
// sem ter que adicionar no efeito em cada componente

import Home from './pages/Home'
import Points from './pages/Points'
import Detail from './pages/Detail'

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" screenOptions={{
                cardStyle: {
                    backgroundColor: '#f0f0f5'
                }
            }}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Points" component={Points}/>
                <AppStack.Screen name="Detail" component={Detail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;

