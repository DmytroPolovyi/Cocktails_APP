import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export const Preloader = () => {
  return (
    <View style={ styles.container }>
      <Image source={ require('../../../assets/preloader.gif') }
             style={ {width: 30, height: 30} }/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    top: '10%',
    zIndex: 100,
    backgroundColor: 'white',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    left: '50%',
    marginLeft: -20
  }
});
