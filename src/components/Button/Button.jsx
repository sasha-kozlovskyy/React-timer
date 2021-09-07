import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ handleClickOnStart,
  handleClickOnStop,
  handleClickOnReset,
  state }) => (

    <div className="container">
      {(state === false)
        ? (
          <button
            type="button"
            className="button btn btn-primary"
            onClick={handleClickOnStart}
          >
            Start
          </button>
        )
        : (
          <button
            type="button"
            className="button btn btn-dark"
            onClick={handleClickOnStop}
          >
            Stop
          </button>
        )
      }

      <button
        type="button"
        id="wait"
        className="button btn btn-warning"
      >
        Wait
      </button>
      <button
        type="button"
        className="button btn btn-danger"
        onClick={handleClickOnReset}
      >
        Reset
      </button>
    </div>
);

Button.propTypes = {
  state: PropTypes.bool.isRequired,
  handleClickOnStart: PropTypes.func.isRequired,
  handleClickOnStop: PropTypes.func.isRequired,
  handleClickOnReset: PropTypes.func.isRequired,
};
