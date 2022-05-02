import logo from './logo.svg';
import './App.css';
import Form from './form';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';


function App() {
  return (
    
    <BrowserRouter>
  <Switch>

    <Route path="/" exact component={Form} />
    

  </Switch>
</BrowserRouter>

  );
}

export default App;
