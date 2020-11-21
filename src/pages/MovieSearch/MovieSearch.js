import React, { Component } from 'react'
import FilterBox from '../../components/FilterBox/filterbox.component'
import SearchResults from '../../components/SearchResults/searchresults.component'
import NavBottom from '../../components/NavBottom/navbottom.component';

export default class MovieSearch extends Component {
  render() {
    return (
      <>
        <NavBottom />
        <FilterBox />
        <SearchResults />
      </>
    )
  }
  
}
