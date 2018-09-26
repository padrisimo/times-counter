import React, { Component } from 'react';
import { TimesCounter } from './Components/TimesCounter';

class App extends Component {
  render() {
    return (
      <TimesCounter total={50}
        powder={20}
        backcountry={10}
        goal={100} />
    );
  }
}

export default App;
