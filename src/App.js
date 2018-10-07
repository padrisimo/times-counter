import React, { Component } from 'react';
import { CountDaysList } from './components/CountDaysList';
import { TimesCounter } from './components/TimesCounter';

class App extends Component {
  render() {
    return (
      /* <TimesCounter /> */
      <CountDaysList days={[
        { beach: "CastelldeFells", date: new Date('10/1/2018'), sunny: true, surf: true },
        { beach: "Barceloneta", date: new Date('9/5/2018'), sunny: true, surf: false },
        { beach: "San Sebastian", date: new Date('8/1/2018'), sunny: false, surf: true }
      ]} />
    );
  }
}

export default App;
