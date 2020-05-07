import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const DrinksItem = ({item}) => {
  return (
    <View style={ styles.drinksItem } key={ item.idDrink }>
      <Image source={ {uri: item.strDrinkThumb} } style={ styles.image }/>
      <Text style={ styles.text }>
        { item.strDrink }
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  drinksItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: '#7E7E7E'
  }
});
