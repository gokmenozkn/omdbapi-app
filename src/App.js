import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/header.component';
import MovieSearch from './pages/MovieSearch/MovieSearch';

import { MovieProvider } from './context/MovieContext';

export default function App() {
  return (
    <MovieProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={MovieSearch} />
        </Switch>
      </Router>
    </MovieProvider>
  );
}

