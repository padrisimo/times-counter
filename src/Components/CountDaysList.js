import React from 'react';
import { CountDaysRow } from './CountDaysRow';

export const CountDaysList = ({ days }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Beach</th>
        <th>Sunny</th>
        <th>Surf</th>
      </tr>
    </thead>
    <tbody>
      {days.map((day, i) => <CountDaysRow
        key={i}
        {...day}
      />)}
    </tbody>
  </table>
);

CountDaysList.propTypes = {
  days: props => {
    if(!Array.isArray(props.days)){
      return new Error(
        "CountDaysList should be an array"
      )
    } else if (!props.days.length){
      return new Error (
        "CountDaysList must have at least one record"
      )
    } else {
      return null;
    }
  }
}