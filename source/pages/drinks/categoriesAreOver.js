import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const CategoriesAreOver = ({loadMore}) => {

  const [ visibility, setVisibility ] = useState(false)

  useEffect(() => {
    setVisibility(true)
    setTimeout(() => (setVisibility(false)), 15000)
  }, [ !loadMore ])

  return (
    <View>
      { visibility && <View style={ styles.wrapper }>
        <Text style={ styles.text }>
          sorry but the cocktails are over
        </Text>
      </View> }
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#272727',
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    left: '50%',
    marginLeft: -100,
    position: 'absolute',
    flexDirection: 'row',
    bottom: 10
  },
  text: {
    fontSize: 18,
    color: 'white',
    textTransform: 'uppercase',
    textAlign: 'center'
  }
});
