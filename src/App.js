import React from 'react';
import {Header} from './layout/Header'
import {Main} from './layout/Main'
import {Footer} from './layout/Footer'

function App() {
  return (
    <React.Fragment>
      <div className="main_container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
