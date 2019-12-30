/**
 * AppContainer.ts
 * - Root component & root ui actions
 * Notes:
 * - N/A
 * Created 19-04-11
 * @author Elias Mawa <elias@emawa.io>
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import Routes from "./RouteConfig";

/**
 * Create a stack navigator
 */
const AppNavigator = () => {
	return createStackNavigator(Routes, {
		initialRouteName: `${Routes.Library.name}`,
		headerMode: "none",
	});
};

/**
 * Wrap the navigator
 */
const AppContainer = createAppContainer(AppNavigator());

export default AppContainer;