import React, { createContext } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

export class MovieProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      inputValue: '',
      favorites: []
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.inputValue) {
      axios.get(
        `${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&s=${this.state.inputValue}`
      ).then(res => {
        const items = res.data.Search;
        this.setState({ movies: items });
      }).catch(e => this.setState({ movies: [] }));
      
      this.setState({
        inputValue: ''
      });
    }

  }

  onChange = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  addFavorite = (movie) => {
    const favorites = this.state.favorites;
    const movieId = movie.imdbID;

    const stored = favorites.find(o => o.movie.imdbID === movieId);

    if (stored) { return }
    else {
      favorites.push({ movie: movie });
      this.setState({ favorites: favorites });
      console.log("Favori filmlerim:", favorites);
    }
  }

  render() {
    return(
      <MovieContext.Provider
        value={{
          ...this.state,
          onSubmit: this.onSubmit,
          onChange: this.onChange,
          addFavorite: this.addFavorite
        }}
      >
        {this.props.children}
      </MovieContext.Provider>
    )
  }
}