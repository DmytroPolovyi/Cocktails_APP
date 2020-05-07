import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export const ApplyFilters = ({changeArrAllCategories, filterCategories}) => {
  return (
    <TouchableOpacity style={ styles.buttonBlock } onPress={ () => (changeArrAllCategories(filterCategories)) }>
      <Text style={ styles.text }>
        APPLY
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonBlock: {
    backgroundColor: '#272727',
    width: 360,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 25,
    left: '50%',
    marginLeft: -180
  },
  text: {
    color: 'white',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 'bold'
  }
});
