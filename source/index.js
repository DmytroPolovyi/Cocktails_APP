import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Store from './reduxStore'
import Drinks from './pages/drinks';
import Filters from './pages/filter';

const Router = createStackNavigator(
  {
    Drinks: {
      screen: Drinks
    },
    Filters: {
      screen: Filters
    }
  },
  {
    index: 0,
    initialRouteName: 'Drinks',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 12,
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: '500',
        color: '#000',
        lineHeight: 28,
        fontSize: 24
      }
    },
  }
);

const AppContainer = createAppContainer(Router);

export default (props) => {
  return (
    <View style={ styles.flex }>
      <Provider store={ Store }>
        <AppContainer screenProps={ props }/>
      </Provider>
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: 'red'
  }
})