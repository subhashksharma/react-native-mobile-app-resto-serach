import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/screens/SearchScreen";
import RestaurantsDetails from "./src/screens/restaurantDeatils";
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantDetails: RestaurantsDetails,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
