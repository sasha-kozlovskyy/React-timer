import React from 'react';
import { interval } from 'rxjs';
import PropTypes from 'prop-types';
import './Clock.css';

export const ClockDispley = ({ time }) => (
  <div className="clockDispley">
    <span>
      {(`0${Math.floor(time / 3600)}`).slice(-2)}
    </span>
&nbsp;
    <span>
      {(`0${Math.floor((time / 60) % 60)}`).slice(-2)}
    </span>
&nbsp;
    <span>{(`0${Math.floor(time % 60)}`).slice(-2)}</span>
  </div>
);

export const tick$ = interval(1000);

ClockDispley.propTypes = {
  time: PropTypes.number.isRequired,
};
