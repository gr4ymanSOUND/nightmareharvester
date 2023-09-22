import React, { useState, useEffect } from 'react';
require('../img/nightmareLogo2.jpeg');

const HomePage = () => {

  return (
    <div className="content-container home">

      <div className="article-heading" style={{width: "90%"}}>
        <h1>
          Welcome to the Twisted Realm of...
        </h1>
      </div>
      <div className='home-logo-container'>
        <img src={require('../img/nightmareLogo2.jpeg')}></img>
      </div>
      <article>
        <div className="article-heading">
          <div className="emoji">📚</div>
          <h2>
            Embrace the Repository of Obscurity
          </h2>
          <div className="emoji">📚</div>
        </div>
        <p>
          We are collectors from the dark corridors of slumber, the weavers of unique tales that dance on the edge of dreams. With a heart that thrives in terror and a mind that feeds on the ethereal, we beckon you to delve into the enchanting trenches of your own subconscious.
        </p>
        <p>
          Step into our sanctuary, where your nightmares are not merely relegated to the cobwebbed corners of your psyche, but rather, they blossom into tales of wonder. Picture a library of dreams, an archive where the fragments of your slumber merge with the artistry of the macabre. This digital catacomb unveils your most curious phobias and your hidden curiosities, all tastefully transformed into stories that dance on the edge of reality.
        </p>
        <p style={{textAlign: "center"}}>
          Dare you take my hand and step into the inky abyss?
        </p>
        <p style={{textAlign: "center", margin: 0}}>
          Yours in shadows,
        </p>
        <div className="article-signature">
        <div className="emoji">🌙</div>
          <h1>
            The Nightmare Harvester 
          </h1>
          <div className="emoji">🌙</div>
        </div>

      </article>

      <article>
        <div className="article-heading">
          <h1>
            Support us by donating!
          </h1>
        </div>
        <div className="article-heading">
          <h2>
            --- Coming Soon! ---
          </h2>
        </div>

      </article>

    </div>
  )

};

export default HomePage;