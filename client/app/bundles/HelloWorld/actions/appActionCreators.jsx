/* eslint-disable import/prefer-default-export */

import * as constants from '../constants/appConstants';

export const restaurantsArrived = (restaurants) => ({
  type: constants.RESTAURANTS_ARRIVED,
  restaurants
});

export const genresArrived = (genres) => ({
  type: constants.GENRES_ARRIVED,
  genres
});

export const filterUpdate = (filterType, field, value) => ({
  type: constants.FILTER_UPDATE,
  filterType,
  field,
  value
});

export const setModalOpen = (modalIsOpen) => ({
  type: constants.MODAL_OPEN_CLOSE,
  modalIsOpen
});

export const addRestaurant = (restaurant) => ({
  type: constants.RESTAURANT_ADD,
  restaurant
});
