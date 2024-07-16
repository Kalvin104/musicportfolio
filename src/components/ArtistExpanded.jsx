import React from 'react'

import ArtistsData from './ArtistsData'

export default function ArtistExpanded({expand, expandBox}) {

  const selectedArtist = ArtistsData.find(artist => artist.id === expand)

  return (
    <article className='artist-button' onClick={() => expandBox(selectedArtist.id)}>
      <h2>{selectedArtist.firstName} {selectedArtist.secondName}</h2>
      <p>Genre: {selectedArtist.genre}</p>
      <img src={selectedArtist.image} alt=''></img>
      <iframe style={{borderRadius: "12px"}} src={selectedArtist.spotifyUrl} width="100%" height="500" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      <p>{selectedArtist.artistDesc}</p>
      <p>{selectedArtist.myDesc}</p>
    
    </article>
  )
}

//<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/6OGcowOdSmSx7liny5gPix?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
