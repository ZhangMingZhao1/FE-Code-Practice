import React from 'react';
import DataShow from './component/dataShow';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <DataShow />
      </div>
    );
  }
}

export default App;


