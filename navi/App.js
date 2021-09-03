import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileEdit from "./src/screens/ProfileEdit";
import ProfileDetail from "./src/screens/ProfileDetail";
import ShoppingScreen from "./src/screens/ShoppingScreen";


const navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { title: 'Home' }
    },
    Profile: {
      screen: ProfileEdit,
      navigationOptions: { title: 'Edit Profile' }
    },
    Detail: {
      screen: ProfileDetail,
      navigationOptions: { title: 'Details' }
    },
    Shop: {
      screen: ShoppingScreen,
      navigationOptions: { title: 'Store' }
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Home'
    }
  }
);

export default createAppContainer(navigator);