import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { clearDrinks, fetchAllCategories, fetchCategory } from '../../reducers/app';
import { CategoriesAreOver } from './categoriesAreOver';
import { CategoriesItem } from './drinksCategoriesItem';
import { Preloader } from '../preloader';

class Drinks extends Component {

  componentDidMount() {
    this.props.fetchAllCategories('list')
  }

  state = {
    allCategoriesLocalState: [],
    categoriesItemCount: 0,
    categoriesItem: 0,
    visibility: 0,

  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Drinks',
      headerRight: () => <ToFilter navigation={ navigation }/>
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.allCategories && (prevProps.allCategories !== this.props.allCategories)) {
      const allCategoriesFiltered = this.props.allCategories.filter(item => item.checked !== false)
      this.setState({
        allCategoriesLocalState: allCategoriesFiltered,
        categoriesItemCount: allCategoriesFiltered.length,
        categoriesItem: 0,
        visibility: 0,
      })
      this.props.clearDrinks()
      if (allCategoriesFiltered.length > 0) {
        this.props.fetchCategory(allCategoriesFiltered[0].strCategory)
      }
    }
  }

  handleLoadMore = () => {
    this.setState(
      (prevState) => ({
        categoriesItem: prevState.categoriesItem + 1
      }),
      () => {
        this.props.fetchCategory(this.state.allCategoriesLocalState[this.state.categoriesItem].strCategory)
      }
    );
  }
  changeVisibility = () => {
    this.setState({
      visibility: 1
    })
  }

  render() {
    const {drinks, loading} = this.props
    const loadMore = this.state.categoriesItem < this.state.categoriesItemCount - 1
    return (
      <View style={ styles.container }>
        { drinks === null && <Preloader/> }
        { loading && <Preloader/> }
        { drinks && <View>
          { (this.state.allCategoriesLocalState.length === 0) && <NotSelectedCategories/> }
          <FlatList
            data={ drinks }
            keyExtractor={ item => Object.entries(item).map(([ key ]) => key).toString() }
            renderItem={ ({item}) => {
              return (
                <View>
                  <CategoriesItem item={ item }/>
                </View>
              )
            } }
            onEndReachedThreshold={ 0.1 }
            onEndReached={ () => {
              if (loadMore) {
                return this.handleLoadMore()
              } else if (this.state.visibility < 1) {
                this.changeVisibility()
              }
            } }/>
          { (this.state.allCategoriesLocalState.length !== 0) &&
          (this.state.visibility === 1) && <CategoriesAreOver loadMore={ loadMore }/> }
        </View> }
      </View>
    );
  }
}

const NotSelectedCategories = () => {
  return (
    <View style={ styles.notSelectedCategoriesBlock }>
      <Text style={ {fontSize: 16} }>
        You have not selected any categories in the filters
      </Text>
    </View>
  )
}

const ToFilter = ({navigation}) => {
  return (
    <TouchableOpacity style={ styles.filterBlock }
                      onPress={ () => navigation.navigate('Filters') }>
      <Image source={ require('../../../assets/filter.png') } style={ styles.filterPNG }/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  filterBlock: {
    marginRight: 20,
    paddingTop: 5
  },
  filterPNG: {
    width: 28,
    height: 28
  },
  notSelectedCategoriesBlock: {
    paddingVertical: 30,
    alignItems: 'center'
  }
});

const mapStateToProps = state => {
  return {
    allCategories: state.app.allCategories,
    drinks: state.app.drinks,
    loading: state.app.loading
  }
}

export default connect(mapStateToProps, {fetchAllCategories, fetchCategory, clearDrinks})(Drinks);