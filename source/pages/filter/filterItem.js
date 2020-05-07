import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

export const FilterItem = ({item, value, filterCategoriesFN}) => {
  const val = value.checked
  return (
    <View style={ {
      flexDirection: 'row', justifyContent: 'space-between',
      alignItems: 'center', paddingHorizontal: 10
    } }>
      <Text style={ {fontSize: 16, lineHeight: 19, color: '#7e7e7e', marginLeft: 20, marginRight: 130} }>
        { item.strCategory }
      </Text>
      <CheckBox
        iconRight
        iconType='material'
        checkedIcon='check'
        uncheckedIcon='check'
        checkedColor='black'
        size={ 30 }
        checked={ val }
        onPress={ () => (filterCategoriesFN(item.strCategory)) }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});
