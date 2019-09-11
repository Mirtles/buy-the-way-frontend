import React from 'react'

export default function AdvertPage(props) {
  const { title, description, url, price } = props.advert
  return <div>
    <h1>{title}</h1>
    <img src={url} alt={title} className="listing-page-img" />
    <p>{description}<br />Price: €{price}</p>
  </div>
}