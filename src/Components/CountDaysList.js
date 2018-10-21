import React from 'react';
import { CountDaysRow } from './CountDaysRow';
import { Link } from 'react-router-dom';

export const CountDaysList = ({ days, match }) => {

  const filter = match.params.filter;
  const filteredDays = (!filter || 
    !filter.match(/sunny|surf/)) ?
    days:
    days.filter(day => day[filter])

  return (
    <div className="ski-day-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Beach</th>
            <th>Sunny</th>
            <th>Surf</th>
          </tr>
          <tr>
            <td colSpan={4}>
              <Link to="/list-days">All Days</Link> 
              <Link to="/list-days/sunny">Sunny Days</Link> 
              <Link to="/list-days/surf">Surf Days</Link> 
            </td>
          </tr>
        </thead>
        <tbody>
          {filteredDays.map((day, i) => <CountDaysRow
            key={i}
            {...day}
          />)}
        </tbody>
      </table>
    </div>
    
  )
};

CountDaysList.propTypes = {
  days: props => {
    if (!Array.isArray(props.days)) {
      return new Error(
        "CountDaysList should be an array"
      )
    } else if (!props.days.length) {
      return new Error(
        "CountDaysList must have at least one record"
      )
    } else {
      return null;
    }
  }
}