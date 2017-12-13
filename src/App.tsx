/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from "react";
import { Component } from "react";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View } from "react-native";

export default class App extends React.Component<{}, {}> {

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text>
          To get started, edit App.js
        </Text>
        <Text>
          Sup Famo!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // tslint:disable-next-line:object-literal-sort-keys
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    // tslint:disable-next-line:object-literal-sort-keys
    margin: 10,
  },
});

AppRegistry.registerComponent("FlockyouPayme", () => App);
