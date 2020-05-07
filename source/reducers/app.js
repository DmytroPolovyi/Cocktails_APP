import { fetchData } from '../actions/app';

const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES';
const SET_DRINKS = 'SET_DRINKS';
const SET_CLEAR_DRINKS = 'SET_CLEAR_DRINKS';
const CHANGE_ARR_ALL_CATEGORIES = 'CHANGE_ARR_ALL_CATEGORIES';
const CHANGE_LOADING = 'CHANGE_LOADING';

const initialState = {
  allCategories: null,
  drinks: null,
  filterAllCategories: null,
  loading: true,
}

export const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.allCategories.map(item => ({...item, checked: true}))
      }
    case SET_DRINKS:
      return {
        ...state,
        drinks: (state.drinks === null)
          ? [ {[action.obj.value]: action.obj.data.drinks} ]
          : [ ...state.drinks, {[action.obj.value]: action.obj.data.drinks} ],
        loading: false
      }
    case SET_CLEAR_DRINKS:
      return {
        ...state,
        drinks: []
      }
    case CHANGE_ARR_ALL_CATEGORIES:
      return {
        ...state,
        allCategories: action.arr
      }
    case CHANGE_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

const setAllCategories = (allCategories) => ({
  type: SET_ALL_CATEGORIES,
  allCategories,
});

const setCategory = (data, value) => ({
  type: SET_DRINKS, obj: {data, value}
});

const setClearDrinks = () => ({
  type: SET_CLEAR_DRINKS
})

const changeAllCategories = (arr) => ({
  type: CHANGE_ARR_ALL_CATEGORIES, arr
});

const changeLoading = () => ({
  type: CHANGE_LOADING
})

export const fetchAllCategories = (value) => async (dispatch) => {
  let response = await fetchData.allCategoriesAPI(value)
  dispatch(setAllCategories(response.data.drinks))
}

export const fetchCategory = (value) => async (dispatch) => {
  dispatch(changeLoading())
  let response = await fetchData.filterCategoriesAPI(value)
  dispatch(setCategory(response.data, value))
}

export const changeArrAllCategories = (arr) => {
  return (dispatch) => {
    dispatch(changeAllCategories(arr))
  }
}

export const clearDrinks = () => {
  return (dispatch) => {
    dispatch(setClearDrinks())
  }
}