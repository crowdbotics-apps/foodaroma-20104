import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps98791Navigator from '../features/Maps98791/navigator';
import Add-Item98790Navigator from '../features/Add-Item98790/navigator';
import Maps98786Navigator from '../features/Maps98786/navigator';
import UserProfile98782Navigator from '../features/UserProfile98782/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps98791: { screen: Maps98791Navigator },
Add-Item98790: { screen: Add-Item98790Navigator },
Maps98786: { screen: Maps98786Navigator },
UserProfile98782: { screen: UserProfile98782Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
