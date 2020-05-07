import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { changeArrAllCategories } from '../../reducers/app';
import { FilterItem } from './filterItem';
import { ApplyFilters } from './applyFilters';

class Filters extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Filters',
      headerTitleStyle: {
        paddingLeft: 10,
        fontSize: 24
      },
      headerLeft: () => <Back navigation={ navigation }/>
    }
  }

  state = {
    filterCategories: this.props.allCategories
  }

  filterCategoriesFN = (value) => {
    this.setState(
      (prevState) => ({
        filterCategories: prevState.filterCategories.map(item => {
          if (item.strCategory == value) {
            if (item.checked) {
              return {...item, checked: false}
            } else {
              return {...item, checked: true}
            }
          }
          return item
        })
      }))
  }

  render() {
    const {allCategories} = this.props;
    return (
      <View style={ styles.container }>
        <ScrollView>
          <View style={ styles.itemsBlock }>
            { allCategories.map(item => (
              <FilterItem item={ item } key={ item.strCategory }
                          value={ this.state.filterCategories.find(s => (
                            s.strCategory == item.strCategory))
                          } filterCategoriesFN={ this.filterCategoriesFN }/>
            )) }
          </View>
        </ScrollView>
        <ApplyFilters changeArrAllCategories={ this.props.changeArrAllCategories }
                      filterCategories={ this.state.filterCategories }/>
      </View>
    );
  }
}

const Back = ({navigation}) => {
  return (
    <TouchableOpacity style={ styles.buttonBackBlock }
                      onPress={ () => (navigation.goBack()) }>
      <Image source={ require('../../../assets/Vector(1).png') } style={ styles.backPNG }/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  itemsBlock: {
    paddingBottom: 100
  },
  buttonBackBlock: {
    marginRight: 20,
    paddingTop: 5
  },
  backPNG: {
    width: 28,
    height: 23,
    marginLeft: 20
  }
});

const mapStateToProps = state => {
  return {
    allCategories: state.app.allCategories,
  }
}

export default connect(mapStateToProps, {changeArrAllCategories})(Filters);