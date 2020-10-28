import React from 'react'
import '../styles/App.css';
import Signup from '../components/SignUp/Signup'
import {Switch , Route} from 'react-router-dom';
import Master from '../components/list/Master';


function App() {
  return (

      <Switch>
        <Route to="/" component={Master}/>
        <Route to="/dash" component={Master}/>
       </Switch>
    
   
  );
}

export default App;
