import React, { Component } from 'react';
import { CountDaysList } from './CountDaysList';
import { TimesCounter } from './TimesCounter';
import AddDayForm from './AddDayForm';
import Menu from './Menu';

class App extends Component {
  state = {
    days: [
      { beach: "CastelldeFells", date: new Date('10/1/2018'), sunny: true, surf: true },
      { beach: "Barceloneta", date: new Date('9/5/2018'), sunny: true, surf: false },
      { beach: "San Sebastian", date: new Date('8/1/2018'), sunny: false, surf: true }
    ]
  }

  countDays = (filter) => this.state.days.filter(day => filter ? day[filter] : day).length;

  render() {
    return (
      <div className="app">
        <Menu />
        {(this.props.location.pathname === '/') ?
          <TimesCounter
            total={this.countDays()}
            surf={this.countDays('surf')}
            sunny={this.countDays('sunny')}
          /> : (this.props.location.pathname === '/add-day') ?
            <AddDayForm /> :
            <CountDaysList 
            {...this.props}
              days={this.state.days}
            />
            
        }
      </div>
    );
  }
}

export default App;
