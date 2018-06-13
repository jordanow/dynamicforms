import React, {PureComponent} from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';

import FormFields from "../../data/formFields";

import DynamicForm from "../../components/DynamicForm/index";

/**
 * App started at 9:00 pm
 */
class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Dynamic Forms</h1>
        </header>

        <DynamicForm schema={FormFields}/>
      </div>
    );
  }
}

export default App;
