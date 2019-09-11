import React, { Component } from "react"
import { connect } from 'react-redux'
import AdvertPage from './AdvertPage'

class AdvertPageContainer extends Component {

  render() {
    const id = parseInt(this.props.match.params.id)
    const advert = this.props.adverts.find(advert => advert.id === id)
    return <AdvertPage advert={advert} />
  }
}

const mapStateToProps = (state) => {
  return {
    adverts: state.adverts
  }
}

export default connect(mapStateToProps)(AdvertPageContainer)