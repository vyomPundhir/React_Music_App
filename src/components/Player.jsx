import React from 'react'

const Player = () => {
  return (
    <section>
      <div className="currentTrack">

        <div>
          <img src={trackImage} alt="" />
        </div>

        <div>
          <h3>{trackName}</h3>
          <p>{trackArtist}</p>
        </div>

        <div>
          <img src={addToPlaylist} alt="" />
        </div>

      </div>

      <div className="playerItems"></div>
      
    </section>
  )
}

export default Player