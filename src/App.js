import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TelaPrincipal from './components/TelaPrincipal';
import TelaProcessos from './components/TelaProcessos';
import TelaContato from './components/TelaContato';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={TelaPrincipal} />
          <Route path="/processos" component={TelaProcessos} />
          <Route path="/contato" component={TelaContato} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;