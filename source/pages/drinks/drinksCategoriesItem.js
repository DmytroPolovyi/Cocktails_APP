import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { DrinksItem } from './drinksItem';

export const CategoriesItem = ({item}) => {
  return (
    <View>
      { Object.entries(item).map(([ key, value ]) => {
        return (
          <View key={ key }>
            <Text style={ styles.title }>{ key }</Text>
            <FlatList
              data={ value }
              keyExtractor={ item => `${ item.idDrink }` }
              renderItem={ ({item}) => {
                return (
                  <DrinksItem item={ item }/>
                )
              } }
            />
          </View>
        )
      }) }
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    lineHeight: 16,
    color: '#7e7e7e',
    paddingLeft: 20,
    paddingTop: 20
  },
});
