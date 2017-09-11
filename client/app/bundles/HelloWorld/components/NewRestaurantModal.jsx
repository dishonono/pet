import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import FormField from './FormField.jsx';

export default class NewRestaurantModal extends React.Component {

  static propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    setModalOpen: PropTypes.func.isRequired,
    addRestaurant: PropTypes.func.isRequired,
    ratingVals: PropTypes.array.isRequired,
    ratingKeys: PropTypes.array.isRequired,
    genreKeys: PropTypes.array.isRequired,
    genreVals: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      errors: {}
    };
    this.formData = {};
  }

  submitForm = (e) => {
    e.preventDefault();

    console.log('-->', this.formData);
    fetch("/api/v1/restaurants", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.formData)
    }).then((response) => {
      if (response.status === 200) {
        return response.json().then((data) => {
          this.setState({errors: ''});
          this.props.addRestaurant(data);
          this.props.setModalOpen(false);
        })
      } else {
        return response.json().then((data) => {
          if (data.errors) {
            this.setState({errors: data.errors});
            //Object.keys(data.errors)[0] +" "+Object.values(data.errors)[0] : ""}`
          }
        })
      }

    })

  }

  updateData = (field, val) => {
    this.formData[field] = val;
  };

  render() {
    return <Modal isOpen={this.props.modalIsOpen} contentLabel="Add Restaurant" style={{
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(150, 150, 150, 0.75)'
      },
      content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '350px',
        height: '420px',
        overflow: 'visible',
        transform: 'translate(-50%, -50%)',
        border: '1px solid #ccc',
        boxShadow: '3px 3px 2px #888888',
        background: '#fff',
        borderRadius: '2px',
        padding: '20px',
        textAlign: 'center',
        fontFamily: 'Helvetica Neue,Helvetica,Arial,Sans-Serif'
      }
    }}>
      <h2>Add Restaurant</h2>

      <form onSubmit={this.submitForm} id="addRestaurantForm">
        <div className="formArea">
          <FormField title="Name" name="name" onChange={this.updateData} error={this.state.errors.name}>
            <input/>
          </FormField>

          <FormField title="Genre" name="genre_id" onChange={this.updateData} error={this.state.errors.genre}>
            <select>
              {this.props.genreKeys.map((key, index) => {
                return <option key={key} value={key}>{this.props.genreVals[index]}</option>
              })}
            </select>
          </FormField>

          <FormField title="Rating" name="rating" onChange={this.updateData} error={this.state.errors.rating}>
            <select>
              {this.props.ratingKeys.map((key, index) => {
                return <option key={key} value={key}>{this.props.ratingVals[index]}</option>
              })}
            </select>
          </FormField>

          <FormField title="Delivery time (avg.)" name="max_delivey_time" onChange={this.updateData} error={this.state.errors.max_delivey_time}>
            <input/>
          </FormField>

          <input type="checkbox" onChange={(e) => {
            this.updateData("ten_bis", e.target.value);
          }}/>
          <span>Accepts 10Bis?</span>

        </div>
        <div className="buttons">
          <button type="button" onClick={(e) => this.props.setModalOpen(false)}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </Modal>
  }
}
