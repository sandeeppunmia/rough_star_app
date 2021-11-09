import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./screens/Home";
import Details from "./screens/Details";

export default function App(){
  return <AppContainer/>;
}

const appStackNavigator = createStackNavigator(
  {
    Home:{
      screen:Home,
      navigationOption:{
        headerShown: false
      }
    },
    Details:{
      screen:Details
    }
  },
  {
    initalRouteName:"Home"
  }
);

const AppContainer = createAppContainer(appStackNavigator);