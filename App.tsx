import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './www/Home';
import LeftMenu from './www/LeftMenu';
import Splash from './www/Splash';
import Detail from './www/Detail';
import Search from './www/Search';
import Favorites from './www/Favorites';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MenuStart = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Anasayfa"
      drawerContent={(props) => <LeftMenu {...props} />}>
      <Drawer.Screen name="Anasayfa" component={Home} />
    </Drawer.Navigator>
  );
};
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="MenuStart" component={MenuStart} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Favorites" component={Favorites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
