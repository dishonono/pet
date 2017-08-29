import PropTypes from 'prop-types';
import React from 'react';

export default class Restaurant extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        rating: PropTypes.number,
        ten_bis: PropTypes.bool,
        icon: PropTypes.string
    };


    render() {
        return (
            <div className="restaurant">
                <div className="icon">
                    {this.props.icon}
                </div>
                <div className="details">
                    <span>{this.props.name}</span>
                    <img className={this.props.ten_bis ? "tenbis" : "hidden"}></img><br/>
                    <div>Rating: {"★".repeat(this.props.rating)}</div>

                </div>
            </div>
        );
    }


}