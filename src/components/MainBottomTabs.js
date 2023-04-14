import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import TabBarIcon from './TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ElectionsBottomTabs from './ElectionsBottomTabs';

const Tab = createBottomTabNavigator();

function LogoTitle() {
    return (
      <Image
        style={{ width: 150, height: 40 }}
        source={require('../../assets/logo.png')}
      />
    );
  }

export default function MainBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return <TabBarIcon route={route} focused={focused} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#000080',
        tabBarInactiveBackgroundColor: '#1C1CA6',

        headerStyle: {
            backgroundColor: '#000080',
        },
        headerTintColor: 'white',
        headerTitle: (props) => <LogoTitle {...props} /> ,
        headerTitleAlign: 'center'
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Elections" component={ElectionsBottomTabs} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}