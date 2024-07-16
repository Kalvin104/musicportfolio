import React from 'react'
import { useState } from 'react'
import ArtistExpanded from './ArtistExpanded';
import ArtistsData from './ArtistsData';

export default function Artists() {

    const [expandedArtist, setExpandedArtist] = useState(false);
    const [expand, setExpand] = useState(false)
    console.log(ArtistsData)

    const expandStyle = (id) => ({
        width: expand === id ? "5000px" : ""
    })

    function expandBox(id) {
      console.log('expand selected', id)
      if (expand !== id) {
        setExpand(prevExpand => !prevExpand === id ? null : id)
        setExpandedArtist(true)
      } else {
        setExpand(null)
        setExpandedArtist(false)
      }
    }


  return (
    <div className='artists-container'>
        <h2>Artists worked with:</h2>
        {expandedArtist === true &&
          <ArtistExpanded
            expand = {expand}
            expandBox = {expandBox}
          />
        }
        {expandedArtist === false &&
        <div className='artists-buttons-container'>
          {ArtistsData.map(artist => {
            const { id, firstName, secondName, genre, image } = artist
            {
              return (
                <article key={id} className='artist-button' onClick={() => expandBox(id)}>
                  <h3>{firstName} {secondName}</h3>
                  <img src={image} alt=''></img>
                </article>
              )
            }
          })}
        </div>}

      </div>
  )
}
