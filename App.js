import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

// Screen Imports
import HomeScreen from './src/screens/HomeScreen';
import EventsScreen from './src/screens/EventsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SigninScreen from './src/screens/SigninScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const TabNavigator = createBottomTabNavigator({
  Home: 
  { screen: HomeScreen }, 
  Events: 
  { screen: EventsScreen },
  Profile: 
  { screen: ProfileScreen },
  // Signin: 
  // { screen: SigninScreen },
  // Register: 
  // { screen: RegisterScreen },
  // }, 
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#14a5ff",
      },
      headerTitleStyle: {
        color: "#fff",
      }
    }
});

const App = createAppContainer(TabNavigator);
export default App;