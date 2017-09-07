import PropTypes from 'prop-types';
import React from 'react';

export const ACTION_TYPES = {
  NUMERIC_FIELD_UPDATE : 'NUMERIC_FIELD_UPDATE',
  TEXT_FIELD_UPDATE : 'TEXT_FIELD_UPDATE'
};

export default class Filter extends React.Component {
    static propTypes = {
        title : PropTypes.string,
        hint : PropTypes.string.isRequired,
        field: PropTypes.string.isRequired,
        keys: PropTypes.array.isRequired,
        values: PropTypes.array,
        filterUpdate: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            numeric:  false
        };
    }


    

    componentWillReceiveProps(nextProps) {
        this.setState( {
            //checks that all the keys are numeric, if so, field is numeric
            numeric:  nextProps.keys.reduce(
                (res,key) => res && typeof(key)==="number"
                , true)
        });
    }


}
