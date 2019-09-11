import React from 'react'
import { Link } from "react-router-dom"

export default class AdvertsList extends React.Component {
  render() {
    return (
      <div className="listings-list">
        {this.props.adverts
          .map((advert, i) => <Link key={i} to={`/adverts/${advert.id}`}>
            <div className="listing-box" >
              <h3> {advert.title} </h3>
              <img src={advert.url} alt={advert.title} className="listing-img" />
              <p>Price: €{advert.price}</p>
            </div>
          </Link>
          )}
      </div>
    )
  }
}