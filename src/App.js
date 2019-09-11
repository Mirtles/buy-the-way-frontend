import './App.css';
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { Route } from 'react-router-dom'

import AdvertPageContainer from './components/AdvertPage/AdvertPageContainer'
import AdvertsListContainer from './components/AdvertsList/AdvertsListContainer'
import CreateAdvertFormContainer from './components/CreateAdvertForm/CreateAdvertFormContainer';

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
        <Route exact path="/" component={AdvertsListContainer} />
        <Route exact path="/adverts/:id" component={AdvertPageContainer} />
        <Route exact path="/adverts" component={CreateAdvertFormContainer} />
      </div>
    </Provider>
    );
  }
}

export default App;
