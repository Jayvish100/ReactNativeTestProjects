import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import AlbumScreen from "./src/screens/AlbumScreen";

const navigator = createStackNavigator({
  Album: AlbumScreen
}, {
  initialRouteName: 'Album',
  defaultNavigationOptions: {
    title: 'Albums'
  }
});

export default createAppContainer(navigator);