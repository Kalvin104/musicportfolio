import React from 'react'
import { useState } from 'react'

export default function Artists() {

    const [expandedArtist, setExpandedArtist] = useState(null);
    const [expand, setExpand] = useState(false)

    const expandStyle = (id) => ({
        width: expand === id ? "5000px" : ""
    })

    function expandBox(id) {
      if (expand !== id) {
        setExpand(prevExpand => !prevExpand === id ? null : id)
      } else {
        setExpand(null)
      }
    }


  return (
    <div className='artists-container'>
        <h2>Artists worked with:</h2>
        <div className='artists-buttons-container'>
          <div className='artist-button' id='1' onClick={() => expandBox(1)} style={expandStyle(1)}>
            <h3>Scarlett Fagan</h3>
            <img src='' alt=''></img>
            {expand === 1 && (<iframe src="https://open.spotify.com/embed/artist/6OGcowOdSmSx7liny5gPix?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>)}
          </div> 
          <div className='artist-button' id='2' onClick={() => expandBox(2)} style={expandStyle(2)}>
            <h3>Sarah Ann Ree</h3>
            <img src='' alt=''></img>
            {expand === 2 && (<iframe src="https://open.spotify.com/embed/artist/4XCq5RPPCzYsNBzCJymZs5?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>)}
          </div>
          <div className='artist-button' id='3' onClick={() => expandBox(3)} style={expandStyle(3)}>
            <h3>Sharleena Ray</h3>
            <img src='' alt=''></img>
            {expand === 3 && (<div>Expanded Artist</div>)}
          </div>
          <div className='artist-button' id='4' onClick={() => expandBox(4)} style={expandStyle(4)}>
            <h3>Joe Cadman</h3>
            <img src='' alt=''></img>
            {expand === 4 && (<div>Expanded Artist</div>)}
          </div>
          <div className='artist-button' id='5' onClick={() => expandBox(5)} style={expandStyle(5)}>
            <h3>Fools Teeth</h3>
            <img src='' alt=''></img>
            {expand === 5 && (<iframe src="https://open.spotify.com/embed/artist/4V2x11ZH6maSJYtUnCfs1y?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>)}
          </div>  
        </div>
        {expand && (
            <div>TEST</div>
        )

        }
      </div>
  )
}
