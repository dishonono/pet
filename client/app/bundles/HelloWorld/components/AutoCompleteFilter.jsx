import React from 'react';
import Filter from './Filter.jsx';
import { TEXT_FILTER } from '../constants/appConstants';

export default class AutoCompleteFilter extends Filter {
    render() {
        return <div className="we_eat_filter">
            <h3>{this.props.title}</h3>
            <input placeholder={this.props.hint}
                   list={this.props.field+"_list"}
                   onChange={(e) => this.props.filterUpdate(TEXT_FILTER, this.props.field, e.target.value)}/>
            <datalist id={this.props.field+"_list"} >
                {this.props.keys.map( (key, index) => {
                    return <option key={key} value={key}>{this.props.values ? this.props.values[index] : key}</option>
                }) }

            </datalist>
        </div>
    }
}
