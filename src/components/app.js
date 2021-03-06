import '../style/main.scss';

import React from 'react';
import {Route} from 'react-router-dom'

import Header from './header'
import Footer from './footer'
import Categories from './categories/Category'

class App extends React.Component {

  constructor(props) {
   super(props);
  }

  render() {
    return (
      <div>
        <Header appTitle="Trellissimo" />
        <main>
          <Route exact path='/' component={Categories} />
        </main>
        <Footer>
          <p>Mookerjee Productions 2007</p>
        </Footer>
      </div>
    )
  }
}

export default App;