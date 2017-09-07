import React from 'react';
import Filter from './Filter.jsx';
import { NUMERIC_FILTER } from '../constants/appConstants';

export default class SelectFilter extends Filter {
    render() {
        return <div className="we_eat_filter">
            <h3>{this.props.title}</h3>
            <select
                onChange={(e) => this.props.filterUpdate(NUMERIC_FILTER, this.props.field, e.target.value)}>
                <option value="">{this.props.hint}</option>
                {this.props.keys.map( (key, index) => {
                    return <option key={key} value={key}>{this.props.values ? this.props.values[index] : key}</option>
                }) }

            </select>
        </div>
    }
}
