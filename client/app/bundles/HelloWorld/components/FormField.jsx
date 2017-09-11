import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import styles from './FormField.css';

export default class FormField extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    onChange: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
  };

  render() {
    const child = React.Children.only(this.props.children);
    const childWithExtraProps = React.cloneElement(child, {
      onChange: (e) => {
        this.props.onChange(this.props.name, e.target.value);
      },
      ref: (input) => {
        if (input != null && input.value != null) {
          this.props.onChange(this.props.name, input.value)
        }
      }
    });

    return (
      <div className={styles.fieldDiv}>
        <label>{this.props.title}</label>
        <div className={styles.inputAndError}>
          {childWithExtraProps}
          <div className={styles.error}>{this.props.error
              ? this.props.error.join(', ')
              : ""}</div>
        </div>
      </div>
    );
  }
}
