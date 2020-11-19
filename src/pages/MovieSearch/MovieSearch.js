import React, { Component } from 'react'
import FilterBox from '../../components/FilterBox/filterbox.component'
import Header from '../../components/Header/header.component'
import SearchResults from '../../components/SearchResults/searchresults.component'
import axios from 'axios';

export default class MovieSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      foundItems: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.inputValue) {
      axios.get(
        `http://www.omdbapi.com/?apikey=8e70dc5&s=${this.state.inputValue}`
        )
        .then(res => {
          const items = res.data.Search;
          this.setState({
            foundItems: items
          })
          console.log("Api: ",res)
          console.log("Array: ",this.state.foundItems)
        })
        .catch(e => console.log(e));
      // this.setState({
      //   inputValue: ""
      // })
    }
  }

  onChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <>
        <Header />
        <FilterBox handleSubmit={this.handleSubmit} onChange={this.onChange} inputValue={this.state.inputValue} />
        <SearchResults movies={this.state.foundItems} inputValue={this.state.inputValue} />
      </>
    )
  }
  
}
