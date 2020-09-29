import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import api from './api';
import './style/global.css';

class App extends React.Component {

  // async componentDidMount() {
  //   const resposta = await api.get('');
  //   console.log(resposta.data);
  //   this.setState({ filmes: resposta.data });
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Routes />
        </div>
      </Router >
    );
  };
}

export default App;
