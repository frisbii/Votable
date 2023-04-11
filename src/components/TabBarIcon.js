import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TabBarIcon({ route, focused, color, size }) {
  const iconDict = {
    'Home' : 'home',
    'Search' : 'search',
    'Elections' : 'menu',
    'Outreach' : 'megaphone',
    'Settings' : 'cog',

    'Races' : 'checkbox',
    'Candidates' : 'people',
    'News' : 'newspaper',
    'Contribute' : 'add-circle',
    'Learn' : 'book'
  };

  let iconName = iconDict[route.name]; 

  return <Ionicons name={focused ? iconName : iconName.concat("-outline")} size={size} color={color} />;
}