import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Header from './components/Header/header.component';
import MovieSearch from './pages/MovieSearch/MovieSearch';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';

import { MovieProvider } from './context/MovieContext';
import MovieReview from './pages/MovieReview/MovieReview';

export default function App() {
  return (
    <MovieProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/results" component={MovieSearch} />
          <Route path="/results/:id" component={MovieReview} />
          <Route path="/favorites" component={FavoritesPage} />
        </Switch>
      </Router>
    </MovieProvider>
  );
}

