import axios from 'axios';

export const fetchData = {
  allCategoriesAPI(value) {
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=${ value }`)
  },
  filterCategoriesAPI(value) {
    return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${ value }`)
  }
}