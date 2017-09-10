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

  
}
