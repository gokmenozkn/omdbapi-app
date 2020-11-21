import axios from 'axios'
import React, { Component } from 'react'

import Moviereview from '../../components/Moviereview/moviereview.component'
import NavBottom from '../../components/NavBottom/navbottom.component'


export default class MovieReview extends Component {
  constructor (props){
    super(props);

    this.state = {
      movieData: []
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id

    axios.get(
      `${process.env.REACT_APP_API_URL}/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}&plot=full`
    ).then(res => {
      this.setState({
        movieData: res.data
      })
      console.log(this.state.movieData)
    })
  }

  render() {
    return (
      <>
        <NavBottom />
        <Moviereview movieData={this.state.movieData} />
      </>    
    )
  }
}
