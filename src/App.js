import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Iqbal', age: 22 },
      { name: 'Keket', age: 21 },
      { name: 'John', age: 23 },
    ],
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Iqbal Ajie', age: 22 },
        { name: 'Keket', age: 21 },
        { name: 'John', age: 25 },
      ],
    });
  };

  return (
    <div className='App'>
      <h1>Hi, I'm a React App</h1>
      <p>This is a paragraph!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}>
        Job: UI Designer
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
