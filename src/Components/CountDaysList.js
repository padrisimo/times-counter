import { TiWaves, TiAdjustBrightness } from 'react-icons/ti';
import { GoCalendar } from 'react-icons/go';
import { CountDaysRow } from './CountDaysRow';
import React from 'react';

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
