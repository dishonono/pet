import PropTypes from 'prop-types';
import React from 'react';
import Restaurant from './Restaurant.jsx';
import {ACTION_TYPES} from './Filter.jsx';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

export default class RestaurantsList extends React.Component {


    static propTypes = {
        id: PropTypes.string,
        genres: PropTypes.array,
        restaurants: PropTypes.array,
        filters: PropTypes.object
    };

  getFilteredData = () => {
    //per restaurant, check that it passes all current applied filters
    return this.props.restaurants.filter( (rest) =>
      Object.values(this.props.filters).reduce( (passed, filterAction) => {
        const expected = rest[filterAction.field]
        let res = true;
        if (filterAction.value) {
          if (filterAction.type==ACTION_TYPES.NUMERIC_FIELD_UPDATE) {
            res = (expected == parseInt(filterAction.value));
          } else if (filterAction.type==ACTION_TYPES.TEXT_FIELD_UPDATE) {
            res = expected.toLowerCase().includes(filterAction.value.toLowerCase());
          } else {
            throw "Unknown filter action type";
          }
        }
        return passed && res;

      },  true)
    )
  }




    render() {

        const filteredRestaurants  = this.getFilteredData();

        return (
            <div id={this.props.id}>
              <div className="listWrapper">
                {filteredRestaurants.map(rest => {
                        let icon = 'F';
                        if (rest.genre_id) {
                            let gens = this.props.genres.filter((g)=> g.id==rest.genre_id);
                            if (gens.length > 0) {
                                if (gens[0].icon) {
                                    icon = gens[0].icon;
                                }
                            }
                        }
                        return <Restaurant key={rest.id}
                                           name={rest.name}
                                           ten_bis={rest.ten_bis}
                                           icon={icon}
                                           rating={rest.rating}/>
                    }
                )}
              </div>
              <div className="mapWrapper">
              <GettingStartedGoogleMap
                  containerElement={
                    <div style={{ height: `100%` , position: 'relative', top: 0, right: 0, bottom: 0, left: 0}} />
                  }
                  mapElement={
                    <div style={{ height: `100%` }} />
                  }
                  markers={filteredRestaurants.map(rest => {
                    if(rest.geo) {
                      const latlng = rest.geo.split(',');
                      return {position: {lat: parseFloat(latlng[0]), lng: parseFloat(latlng[1])},
                              title: rest.name

                              };
                    }
                  })
                  }
                />

              </div>
            </div>
        );
    }
}

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={12}
    defaultCenter={{ lat: 32.1, lng: 34.8 }}
    onClick={props.onMapClick}
    >
    {props.markers.map((marker, index) =>
      (<Marker key={'marker'+index} label={labels[index]}  {...marker} />)
    )}
  </GoogleMap>
  ));

const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
