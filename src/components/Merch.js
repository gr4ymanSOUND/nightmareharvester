import React, { useState, useEffect } from 'react';

const Merch = () => {

  return (
    <div className="content-container">

      <article>
        <div className="article-heading">
          <h1>
            Merch
          </h1>
        </div>
        <h2 style={{textAlign: 'center', marginBottom: '3rem'}}>
          --- Coming Soon! ---
        </h2>

      </article>

      <article>
        <div className='donate-section'>
          <p>
            Want to support us without also supporting your hoarding habit? Enter whatever amount you are comfortable with and then click "Donate"!
          </p>
          <stripe-buy-button
            buy-button-id="buy_btn_1O4Y7yAjds8MtnyF8cBRlRck"
            publishable-key="pk_live_51NteRJAjds8MtnyF1teschh3jPQ4IMXkARnCQS0b0dfRYdhskqEOTcgtOiNeZf44ieIFWL03mqP0PtWS1nPF6Smn00PGxsNsqZ"
          >
          </stripe-buy-button>
          
        </div>
      </article>

    </div>
  )

};

export default Merch;