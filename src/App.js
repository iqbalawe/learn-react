import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Iqbal', age: 22 },
      { name: 'Keket', age: 21 },
      { name: 'John', age: 23 },
    ],
  };

  switchNameHandler = () => {
    // console.log('is this work?');
    // this.state.persons[0].name = 'Iqbal Ajie';
    this.setState({
      persons: [
        { name: 'Iqbal Ajie', age: 22 },
        { name: 'Keket', age: 21 },
        { name: 'John', age: 25 },
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is a paragraph!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>
          Job: UI Designer
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
