import React from 'react'
import FilterBox from '../../components/FilterBox/filterbox.component'
import Header from '../../components/Header/header.component'
import SearchResults from '../../components/SearchResults/searchresults.component'

export default function MovieSearch() {
  return (
    <>
      <Header />
      <FilterBox />
      <SearchResults />
    </>
  )
}
