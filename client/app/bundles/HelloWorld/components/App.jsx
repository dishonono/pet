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

         this.state = {restaurants:[], genres:[], filters:{}, modalIsOpen: false}
    }

    componentWillMount() {
        fetch ('/api/v1/restaurants')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({restaurants: responseJson, filtered:responseJson.slice(0)})

            });
        fetch ('/api/v1/genres')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({genres: responseJson})

            });
    }

    updateFilters = (filterAction) => {
        this.setState((prevState, props) => ({
          filters: {...prevState.filters, [filterAction.field]: filterAction }
            })
        );

    };

    openModal = () => {
      this.setState({modalIsOpen: true});
    };
    closeModal = () => {
      this.setState({modalIsOpen: false});
    };

    addRestaurant = (newRest) => {
      this.setState((prevState, props) => ({
        restaurants: [...prevState.restaurants, newRest]
      }));
    };

    render() {

        if (this.state.restaurants && this.state.genres) {
          const ratingKeys = [1,2,3];
          const ratingVals = ["★","★★","★★★"];
          const genreKeys  = this.state.genres.map(genre => genre.id);
          const genreVals  = this.state.genres.map(genre => genre.name);
          return (
              <div id="wrapper">
                  <div id="header">
                      <div id="addBtn" onClick={this.openModal}/>
                      <h1>WeEat</h1>
                      <h2>It’s 12:00 and you’re hungry</h2>
                      <div id="findWrapperDiv">
                          <AutoCompleteFilter field="name" hint="Find a restaurant"
                                          update={this.updateFilters}
                                          keys={this.state.restaurants.map(rest => rest.name)}/>
                      </div>
                  </div>
                  <div id="filtersWrapperDiv">
                      <div id="filtersContentDiv">
                          <SelectFilter title="Cuisine" field="genre_id"  hint="humburger, Asian, Salads..."
                                        update={this.updateFilters}
                                        keys={genreKeys}
                                        values={genreVals}/>

                          <SelectFilter title="Rating" field="rating" hint="How many stars..."
                                  update={this.updateFilters}
                                  keys={ratingKeys}
                                  values={ratingVals}/>


                          <SelectFilter title="Speed" field="max_delivery_time"  hint="humburger, Asian, Salads..."
                                        update={this.updateFilters}
                                        keys={[1,2,3]}
                                        values={["★","★★","★★★"]}/>

                      </div>
                  </div>

                  <div id="canvas">
                      <RestaurantsList id="restaurantsList"
                                       restaurants={this.state.restaurants}
                                       genres={this.state.genres}
                                       filters={this.state.filters}
                      />


                  </div>

                <NewRestaurantModal  isOpen={this.state.modalIsOpen}
                 onAdd={this.addRestaurant}
                 closeModal={this.closeModal}
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
