import { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar title="prop Title" />
      </div>
    );
  }


}

export default App;
