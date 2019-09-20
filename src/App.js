import React from 'react';
import './App.css';
import NewsList from './components/News/List';
import NavBar from './components/NavBar/Nav';
import {BrowserRouter , Route , Switch} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <div className="App">   
      <NavBar/>
      <Switch>
        <Route exact path="/" component={NewsList}/>
      </Switch>
    </div>
  </BrowserRouter>
  );
}  

export default App;
