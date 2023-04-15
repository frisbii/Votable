import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'native-base';

import TabBarIcon from './TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ElectionsBottomTabs from './ElectionsBottomTabs';

const Tab = createBottomTabNavigator();

export default function MainBottomTabs() {
  const insets = useSafeAreaInsets();
  
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
        tabBarStyle: {
          backgroundColor: '#000080',
          borderTopColor: 'transparent',
          paddingBottom: insets.bottom,
        },

        headerStyle: {
            backgroundColor: '#000080',
        },
        headerTintColor: 'white',
        headerTitle: (props) => { return( 
          <Image 
            resizeMode='contain' 
            style={{ width: 999, height: 30 }} 
            source={require('../../assets/logo.png')} 
            alt='logo'
          /> 
        )},
        headerTitleAlign: 'center',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Elections" component={ElectionsBottomTabs} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}