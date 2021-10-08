import "moment-timezone";
import "moment/locale/pt-br";
import {
  Dimensions
} from 'react-native';
import { Routes } from "./src/routes";
import Chat from "./src/screens/chat";
import React from "react"

const { height } = Dimensions.get("window")


const App = () => {

  return (
    <Routes />
  );
};


export default App;
