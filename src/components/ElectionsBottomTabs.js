import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from './TabBarIcon';
import RacesScreen from '../screens/RacesScreen';
import LearnScreen from '../screens/LearnScreen';
import NewsScreen from '../screens/NewsScreen';

const Tab = createBottomTabNavigator();

export default function ElectionsBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            return <TabBarIcon route={route} focused={focused} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: '#6b6bd1',
        tabBarInactiveBackgroundColor: '#5454c4',

        headerShown: false,
      })}
      safeAreaInsets={{ bottom: 0 }}
    >
        <Tab.Screen name="Races" component={RacesScreen} />
        <Tab.Screen name="Learn" component={LearnScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
    </Tab.Navigator>
  );
}
