import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Astrophy from './App/Screen/Auth/Astrophy';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <>
      <Astrophy />
      {/* <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer> */}
      {/* <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarVisible: false}}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
      </NavigationContainer> */}
      {/* <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{swipeEnabled: true}}>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Cart" component={Cart} />
        </Drawer.Navigator>
      </NavigationContainer> */}
    </>
  );
};

export default App;
