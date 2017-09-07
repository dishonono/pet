import { createStore } from 'redux';
import { combineReducers } from 'redux';
import * as constants from '../constants/appConstants';

const defaultState = {restaurants:[], genres:[], filters:{}, modalIsOpen: false, text:''};

const app = (state = defaultState, action) => {
    switch (action.type) {
        case constants.RESTAURANTS_ARRIVED:
            return {...state, restaurants: action.restaurants};
        case constants.GENRES_ARRIVED:
            return {...state, genres: action.genres};
        case constants.FILTER_UPDATE:
            return {...state, filters: {...state.filters, [action.field]: action }};
        case constants.MODAL_OPEN_CLOSE:
            return {...state, modalIsOpen: action.modalIsOpen};
        case constants.RESTAURANT_ADD:
            return {...state, restaurants: [...state.restaurants, action.restaurant]};
        default:
            console.log(`unknown action type: ${action.type}`);
            return state;
    }
};

const helloWorldReducer = combineReducers({ app });


const configureStore = (railsProps) => (
  createStore(helloWorldReducer, railsProps, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default configureStore;
