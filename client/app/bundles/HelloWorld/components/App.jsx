import PropTypes from 'prop-types';
import React from 'react';
import RestaurantsList from './RestaurantsList.jsx';
import SelectFilter from './SelectFilter.jsx';
import AutoCompleteFilter from './AutoCompleteFilter.jsx';
import NewRestaurantModal from './NewRestaurantModal.jsx';

export default class App extends React.Component {

    /**
     * @param props - Comes from your rails view.
     * @param _railsContext - Comes from React on Rails
     */
    constructor(props, _railsContext) {
        super(props);
    }

    componentWillMount() {
        fetch ('/api/v1/restaurants')
            .then((response) => response.json())
            .then((responseJson) => {
                this.props.restaurantsArrived( responseJson);

            });
        fetch ('/api/v1/genres')
            .then((response) => response.json())
            .then((responseJson) => {
                this.props.genresArrived( responseJson);
            });
    }


    render() {

        if (this.props.restaurants && this.props.genres) {
          const ratingKeys = [1,2,3];
          const ratingVals = ["★","★★","★★★"];
          const genreKeys  = this.props.genres.map(genre => genre.id);
          const genreVals  = this.props.genres.map(genre => genre.name);
          return (
              <div id="wrapper">
                  <div id="header">
                      <div id="addBtn" onClick={(e) => this.props.setModalOpen(true)}/>
                      <h1>WeEat</h1>
                      <h2>It’s 12:00 and you’re hungry</h2>
                      <div id="findWrapperDiv">
                          <AutoCompleteFilter field="name" hint="Find a restaurant"
                                          filterUpdate={this.props.filterUpdate}
                                          keys={this.props.restaurants.map(rest => rest.name)}/>
                      </div>
                  </div>
                  <div id="filtersWrapperDiv">
                      <div id="filtersContentDiv">
                          <SelectFilter title="Cuisine" field="genre_id"  hint="humburger, Asian, Salads..."
                                        filterUpdate={this.props.filterUpdate}
                                        keys={genreKeys}
                                        values={genreVals}/>

                          <SelectFilter title="Rating" field="rating" hint="How many stars..."
                                  filterUpdate={this.props.filterUpdate}
                                  keys={ratingKeys}
                                  values={ratingVals}/>


                          <SelectFilter title="Speed" field="max_delivery_time"  hint="humburger, Asian, Salads..."
                                        filterUpdate={this.props.filterUpdate}
                                        keys={[1,2,3]}
                                        values={["★","★★","★★★"]}/>

                      </div>
                  </div>

                  <div id="canvas">
                      <RestaurantsList id="restaurantsList"
                                       restaurants={this.props.restaurants}
                                       genres={this.props.genres}
                                       filters={this.props.filters}
                      />


                  </div>

                <NewRestaurantModal  modalIsOpen={this.props.modalIsOpen}
                 addRestaurant={this.props.addRestaurant}
                 setModalOpen={this.props.setModalOpen}
                 ratingKeys={ratingKeys}
                 ratingVals={ratingVals}
                 genreKeys={genreKeys}
                 genreVals={genreVals}
                 />
              </div>
          );
        } else {
            return (<p>Loading...</p>)
        }
    }
}
