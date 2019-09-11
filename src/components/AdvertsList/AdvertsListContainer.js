import React, { Component } from 'react'
import { fetchAdverts } from '../../actions/adverts'
import { connect } from 'react-redux'
import AdvertsList from './AdvertsList'

class AdvertsListContainer extends Component {
  componentDidMount() {
    // fetch list of adverts
    this.props.fetchAdverts()
  }

  render() {

    // 'loading' or AdvertsList(props:adverts)
    return <div>
      {!this.props.adverts ? "loading.." : <AdvertsList adverts={this.props.adverts} />}
    </div>
  }
}

const mapStateToProps = state => ({
  adverts: state.adverts
})

const mapDispatchToProps = {
  fetchAdverts,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvertsListContainer)