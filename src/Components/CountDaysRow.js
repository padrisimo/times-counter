import { TiWaves, TiAdjustBrightness } from 'react-icons/ti';
import { GoCalendar } from 'react-icons/go';
import React from 'react';


export const CountDaysRow = ({ beach, date, sunny, surf }) => (
  <tr>
    <td>{date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</td>
    <td>{beach}</td>
    <td>{sunny && <TiAdjustBrightness />}</td>
    <td>{surf && <TiWaves />}</td>
  </tr>
);
