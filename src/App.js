import './App.css';
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { Route } from 'react-router-dom'

import AdvertsListContainer from './components/AdvertsList/AdvertsListContainer'

class App extends Component {
  render() {
    return (<Provider store={store}>
      <div className="App">
        <h1>
          Buy the way..
        </h1>
        <h2>
          ..it's yours for the taking.
        </h2>
        <Route path="/" exact component={AdvertsListContainer} />
      </div>
    </Provider>
    );
  }
}

export default App;
