import PropTypes from 'prop-types';
import React from 'react';
import RestaurantsList from './RestaurantsList.jsx';
import SelectFilter from './SelectFilter.jsx';
import AutoCompleteFilter from './AutoCompleteFilter.jsx';

export default class App extends React.Component {

    /**
     * @param props - Comes from your rails view.
     * @param _railsContext - Comes from React on Rails
     */
    constructor(props, _railsContext) {
        super(props);

         this.state = {restaurants:[], genres:[], filters:{}}
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



    render() {

        if (this.state.restaurants && this.state.genres) {
            return (
                <div id="wrapper">
                    <div id="header">
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
                                          keys={this.state.genres.map(genre => genre.id)}
                                          values={this.state.genres.map(genre => genre.name)}/>

                            <SelectFilter title="Rating" field="rating" hint="How many stars..."
                                    update={this.updateFilters}
                                    keys={[1,2,3]}
                                    values={["★","★★","★★★"]}/>


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


                </div>
            );
        } else {
            return (<p>Loading...</p>)
        }
    }
}

