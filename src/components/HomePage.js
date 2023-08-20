import React, { useState, useEffect } from 'react';

const HomePage = () => {

  return (
    <div className="content-container">

        <article>
          <div className="article-heading">
            <div className="emoji">🌙</div>
            <h2>
              Welcome to the Twisted Realm of the Nightmare Harvester
            </h2>
            <div className="emoji">🌙</div>
          </div>
          <p>
            We are collectors from the dark corridors of slumber, the weavers of unique tales that dance on the edge of dreams. With a heart that thrives in terror and a mind that feeds on the ethereal, we beckon you to delve into the enchanting trenches of your own subconscious.
          </p>
        </article>

        <article>
          <div className="article-heading">
            <div className="emoji">📚</div>
            <h2>
              Embrace the Repository of Obscurity
            </h2>
            <div className="emoji">📚</div>
          </div>
          <p>
            Step into our sanctuary, where your nightmares are not merely relegated to the cobwebbed corners of your psyche, but rather, they blossom into tales of wonder. Picture a library of dreams, an archive where the fragments of your slumber merge with the artistry of the macabre. This digital catacomb unveils your most curious phobias and your hidden curiosities, all tastefully transformed into stories that dance on the edge of reality.
          </p>
        </article>

        <article>
          <p style={{textAlign: "center"}}>
            Dare you take my hand and step into the inky abyss?
          </p>
          <p style={{textAlign: "center"}}>
            Yours in shadows,
          </p>
          <div className="article-heading">
            <div className="emoji">🌙</div>
            <h2>
              The Nightmare Harvester 
            </h2>
            <div className="emoji">🌙</div>
          </div>
        </article>

    </div>
  )

};

export default HomePage;