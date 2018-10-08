import React, { Component } from 'react';
import { CountDaysList } from './CountDaysList';
import { TimesCounter } from './TimesCounter';

class App extends Component {
  state = {
    days: [
      { beach: "CastelldeFells", date: new Date('10/1/2018'), sunny: true, surf: true },
      { beach: "Barceloneta", date: new Date('9/5/2018'), sunny: true, surf: false },
      { beach: "San Sebastian", date: new Date('8/1/2018'), sunny: false, surf: true }
    ]
  }

  countDays = (filter) => this.state.days.filter(day => filter ? day[filter] : day ).length;

  render() {
    return (
      <div className='app'>
        <CountDaysList days={this.state.days} />
        <TimesCounter
          total={this.countDays()}
          surf={this.countDays("surf")}
          sunny={this.countDays("sunny")}
        />
      </div>
    );
  }
}

export default App;
